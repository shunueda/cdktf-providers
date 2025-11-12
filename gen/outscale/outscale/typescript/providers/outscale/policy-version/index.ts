// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/policy_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/policy_version#document PolicyVersion#document}
  */
  readonly document: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/policy_version#id PolicyVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/policy_version#policy_orn PolicyVersion#policy_orn}
  */
  readonly policyOrn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/policy_version#set_as_default PolicyVersion#set_as_default}
  */
  readonly setAsDefault?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/policy_version outscale_policy_version}
*/
export class PolicyVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_policy_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyVersion to import
  * @param importFromId The id of the existing PolicyVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/policy_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_policy_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/policy_version outscale_policy_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyVersionConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_policy_version',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._document = config.document;
    this._id = config.id;
    this._policyOrn = config.policyOrn;
    this._setAsDefault = config.setAsDefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // default_version - computed: true, optional: false, required: false
  public get defaultVersion() {
    return this.getBooleanAttribute('default_version');
  }

  // document - computed: false, optional: false, required: true
  private _document?: string; 
  public get document() {
    return this.getStringAttribute('document');
  }
  public set document(value: string) {
    this._document = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document;
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

  // policy_orn - computed: false, optional: false, required: true
  private _policyOrn?: string; 
  public get policyOrn() {
    return this.getStringAttribute('policy_orn');
  }
  public set policyOrn(value: string) {
    this._policyOrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOrnInput() {
    return this._policyOrn;
  }

  // set_as_default - computed: true, optional: true, required: false
  private _setAsDefault?: boolean | cdktf.IResolvable; 
  public get setAsDefault() {
    return this.getBooleanAttribute('set_as_default');
  }
  public set setAsDefault(value: boolean | cdktf.IResolvable) {
    this._setAsDefault = value;
  }
  public resetSetAsDefault() {
    this._setAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsDefaultInput() {
    return this._setAsDefault;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      document: cdktf.stringToTerraform(this._document),
      id: cdktf.stringToTerraform(this._id),
      policy_orn: cdktf.stringToTerraform(this._policyOrn),
      set_as_default: cdktf.booleanToTerraform(this._setAsDefault),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      document: {
        value: cdktf.stringToHclTerraform(this._document),
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
      policy_orn: {
        value: cdktf.stringToHclTerraform(this._policyOrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_as_default: {
        value: cdktf.booleanToHclTerraform(this._setAsDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
