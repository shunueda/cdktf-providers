// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/responderhtmlpage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResponderhtmlpageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/responderhtmlpage#cacertfile Responderhtmlpage#cacertfile}
  */
  readonly cacertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/responderhtmlpage#comment Responderhtmlpage#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/responderhtmlpage#id Responderhtmlpage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/responderhtmlpage#name Responderhtmlpage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/responderhtmlpage#overwrite Responderhtmlpage#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/responderhtmlpage#src Responderhtmlpage#src}
  */
  readonly src?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/responderhtmlpage citrixadc_responderhtmlpage}
*/
export class Responderhtmlpage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_responderhtmlpage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Responderhtmlpage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Responderhtmlpage to import
  * @param importFromId The id of the existing Responderhtmlpage that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/responderhtmlpage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Responderhtmlpage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_responderhtmlpage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/responderhtmlpage citrixadc_responderhtmlpage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResponderhtmlpageConfig
  */
  public constructor(scope: Construct, id: string, config: ResponderhtmlpageConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_responderhtmlpage',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacertfile = config.cacertfile;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
    this._overwrite = config.overwrite;
    this._src = config.src;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cacertfile - computed: true, optional: true, required: false
  private _cacertfile?: string; 
  public get cacertfile() {
    return this.getStringAttribute('cacertfile');
  }
  public set cacertfile(value: string) {
    this._cacertfile = value;
  }
  public resetCacertfile() {
    this._cacertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertfileInput() {
    return this._cacertfile;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // src - computed: true, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cacertfile: cdktf.stringToTerraform(this._cacertfile),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      src: cdktf.stringToTerraform(this._src),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cacertfile: {
        value: cdktf.stringToHclTerraform(this._cacertfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite: {
        value: cdktf.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
