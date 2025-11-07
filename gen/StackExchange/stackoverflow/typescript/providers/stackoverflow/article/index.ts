// https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/article
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArticleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of article. Must be one of `knowledgeArticle`, `announcement`, `howToGuide`, `policy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/article#article_type Article#article_type}
  */
  readonly articleType: string;
  /**
  * The article content in Markdown format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/article#body_markdown Article#body_markdown}
  */
  readonly bodyMarkdown: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/article#id Article#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The set of tags to be associated with the article
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/article#tags Article#tags}
  */
  readonly tags: string[];
  /**
  * The title of the article
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/article#title Article#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/article stackoverflow_article}
*/
export class Article extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackoverflow_article";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Article resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Article to import
  * @param importFromId The id of the existing Article that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/article#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Article to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackoverflow_article", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/article stackoverflow_article} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArticleConfig
  */
  public constructor(scope: Construct, id: string, config: ArticleConfig) {
    super(scope, id, {
      terraformResourceType: 'stackoverflow_article',
      terraformGeneratorMetadata: {
        providerName: 'stackoverflow',
        providerVersion: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._articleType = config.articleType;
    this._bodyMarkdown = config.bodyMarkdown;
    this._id = config.id;
    this._tags = config.tags;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // article_type - computed: false, optional: false, required: true
  private _articleType?: string; 
  public get articleType() {
    return this.getStringAttribute('article_type');
  }
  public set articleType(value: string) {
    this._articleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get articleTypeInput() {
    return this._articleType;
  }

  // body_markdown - computed: false, optional: false, required: true
  private _bodyMarkdown?: string; 
  public get bodyMarkdown() {
    return this.getStringAttribute('body_markdown');
  }
  public set bodyMarkdown(value: string) {
    this._bodyMarkdown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyMarkdownInput() {
    return this._bodyMarkdown;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      article_type: cdktf.stringToTerraform(this._articleType),
      body_markdown: cdktf.stringToTerraform(this._bodyMarkdown),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      article_type: {
        value: cdktf.stringToHclTerraform(this._articleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body_markdown: {
        value: cdktf.stringToHclTerraform(this._bodyMarkdown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
