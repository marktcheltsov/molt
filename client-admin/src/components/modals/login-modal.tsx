
import axios, { AxiosResponse } from "axios";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../ui/modal";
import { useLoginModal } from "../../hooks/use-login-modal";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import useInput from "../../hooks/useInput";
import { login, register } from "../../services/axios-auth";

export const LoginModal = () => {
  const {isOpen, onClose} = useLoginModal();

  const [itsLogin, setItsLogin] = useState(true)
  const [loading, setLoading] = useState(false);

  const email = useInput({required: true})
  const password = useInput({required: true})

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (itsLogin) {
      login(email.value, password.value)
       .then(res => localStorage.setItem('token', res.data))
       .catch(e => console.log(e))
    } else {
      register(email.value, password.value)
      .then(()=> {
        login(email.value, password.value)
       .then(res => {localStorage.setItem('token', res.data)})
       .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
    }
  }

  return (
    <Modal
      title={itsLogin ? 'Login' : 'Register'}
      description=""
      isOpen={isOpen} 
      onClose={onClose}>
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
          <form onSubmit={submit}>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="Email" onChange={email.onChange}/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" placeholder="Password" onChange={password.onChange}/>
            </div>
            <div className="flex w-full items-center gap-1.5 mt-10 gap-10">
            <Button type="submit" className="w-[20%] p-2">{itsLogin ? 'Login' : 'Register'}</Button>
            <div className="flex gap-1.5">have account?<p onClick={()=> setItsLogin(!itsLogin)} className="text-green-400 cursor-pointer">{itsLogin ? 'register' : 'login'}</p></div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
