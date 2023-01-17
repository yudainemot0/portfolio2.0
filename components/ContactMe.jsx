import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

export default function ContactMe() {
    const { register, handleSubmit } = useForm();
    // const onSubmit = (formData) =>
    //     (window.location.href = `mailto:yu.nemoto410@gmail?subject=${formData.subject}$body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);

    function onSubmit(formData) {
        const email = "yu.nemoto410@gmail";
        const subject = formData.subject;
        const body =
            "Hi, my name is " +
            formData.name +
            ". " +
            formData.message +
            " (" +
            formData.email +
            ")";

        window.location.href =
            "mailto:" + email + "?subject=" + subject + "&body=" + body;
    }

    return (
        <div className="h-screen relative flex flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden md:block">
                Contact
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center z-30">
                    I have got just what you need.{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        Lets Talk
                    </span>
                </h4>

                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+1234567890</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">yu.nemoto410@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">123 Developer Lane</p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit mx-auto"
                >
                    <div className="flex space-x-2">
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="contactInput"
                            type="text"
                        />
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="contactInput"
                            type="email"
                        />
                    </div>

                    <input
                        {...register("subject")}
                        placeholder="Subject"
                        className="contactInput"
                        type="text"
                    />

                    <textarea
                        {...register("message")}
                        placeholder="Message"
                        className="contactInput"
                    />
                    <button
                        type="submit"
                        className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
