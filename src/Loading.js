import React from 'react'
import load from "./loading.gif";

export default function Loading() {
  return (
    <>
    <div className="loading">
        <img src={load} alt="loading" />
    </div>
    </>
  )
}
