// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CrNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_namespace#auto_create CrNamespace#auto_create}
  */
  readonly autoCreate: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_namespace#default_visibility CrNamespace#default_visibility}
  */
  readonly defaultVisibility: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_namespace#id CrNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_namespace#name CrNamespace#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_namespace alicloud_cr_namespace}
*/
export class CrNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cr_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CrNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CrNamespace to import
  * @param importFromId The id of the existing CrNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CrNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cr_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cr_namespace alicloud_cr_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CrNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: CrNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cr_namespace',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreate = config.autoCreate;
    this._defaultVisibility = config.defaultVisibility;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create - computed: false, optional: false, required: true
  private _autoCreate?: boolean | cdktf.IResolvable; 
  public get autoCreate() {
    return this.getBooleanAttribute('auto_create');
  }
  public set autoCreate(value: boolean | cdktf.IResolvable) {
    this._autoCreate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateInput() {
    return this._autoCreate;
  }

  // default_visibility - computed: false, optional: false, required: true
  private _defaultVisibility?: string; 
  public get defaultVisibility() {
    return this.getStringAttribute('default_visibility');
  }
  public set defaultVisibility(value: string) {
    this._defaultVisibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVisibilityInput() {
    return this._defaultVisibility;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create: cdktf.booleanToTerraform(this._autoCreate),
      default_visibility: cdktf.stringToTerraform(this._defaultVisibility),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create: {
        value: cdktf.booleanToHclTerraform(this._autoCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_visibility: {
        value: cdktf.stringToHclTerraform(this._defaultVisibility),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
