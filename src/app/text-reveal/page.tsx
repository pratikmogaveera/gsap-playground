import BlankSection from '@/components/BlankSection'
import PopIn from './PopIn'
import FadeIn from './FadeIn'
import DropIn from './DropIn'


const Page = () => {

    return (
        <main>
            <BlankSection />

            <PopIn />
            <FadeIn />
            <DropIn />

            <BlankSection />
        </main>
    )
}

export default Page