import { Helmet } from 'react-helmet-async'

type TitleArgs = {
  title?: string
};

export const Head = ({ title = 'Genshin fan Database' }: TitleArgs) => {
  return (
    <Helmet>
      <title>
        {title}
      </title>
    </Helmet>
  )
}