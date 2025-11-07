// https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/credentials_auto_rotate_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialsAutoRotatePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of days after the credentials will be automatically rotated. Must be between 1 and 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/credentials_auto_rotate_policy#auto_rotate_days CredentialsAutoRotatePolicy#auto_rotate_days}
  */
  readonly autoRotateDays?: number;
  /**
  * Enable or disable the automatic credential rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/credentials_auto_rotate_policy#enable_auto_rotation CredentialsAutoRotatePolicy#enable_auto_rotation}
  */
  readonly enableAutoRotation: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/credentials_auto_rotate_policy#id CredentialsAutoRotatePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the resource which credentials autorotate policy will be managed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/credentials_auto_rotate_policy#resource_id CredentialsAutoRotatePolicy#resource_id}
  */
  readonly resourceId?: string;
  /**
  * The name of the resource which credentials autorotate policy will be managed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/credentials_auto_rotate_policy#resource_name CredentialsAutoRotatePolicy#resource_name}
  */
  readonly resourceName?: string;
  /**
  * The type of the resource which credentials autorotate policy will be managed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/credentials_auto_rotate_policy#resource_type CredentialsAutoRotatePolicy#resource_type}
  */
  readonly resourceType: string;
  /**
  * The account name which autorotate policy will be managed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/credentials_auto_rotate_policy#user_name CredentialsAutoRotatePolicy#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/credentials_auto_rotate_policy vcf_credentials_auto_rotate_policy}
*/
export class CredentialsAutoRotatePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcf_credentials_auto_rotate_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialsAutoRotatePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialsAutoRotatePolicy to import
  * @param importFromId The id of the existing CredentialsAutoRotatePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/credentials_auto_rotate_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialsAutoRotatePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcf_credentials_auto_rotate_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/credentials_auto_rotate_policy vcf_credentials_auto_rotate_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialsAutoRotatePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialsAutoRotatePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'vcf_credentials_auto_rotate_policy',
      terraformGeneratorMetadata: {
        providerName: 'vcf',
        providerVersion: '0.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRotateDays = config.autoRotateDays;
    this._enableAutoRotation = config.enableAutoRotation;
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._resourceName = config.resourceName;
    this._resourceType = config.resourceType;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_rotate_days - computed: false, optional: true, required: false
  private _autoRotateDays?: number; 
  public get autoRotateDays() {
    return this.getNumberAttribute('auto_rotate_days');
  }
  public set autoRotateDays(value: number) {
    this._autoRotateDays = value;
  }
  public resetAutoRotateDays() {
    this._autoRotateDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRotateDaysInput() {
    return this._autoRotateDays;
  }

  // auto_rotate_next_schedule - computed: true, optional: false, required: false
  public get autoRotateNextSchedule() {
    return this.getStringAttribute('auto_rotate_next_schedule');
  }

  // enable_auto_rotation - computed: false, optional: false, required: true
  private _enableAutoRotation?: boolean | cdktf.IResolvable; 
  public get enableAutoRotation() {
    return this.getBooleanAttribute('enable_auto_rotation');
  }
  public set enableAutoRotation(value: boolean | cdktf.IResolvable) {
    this._enableAutoRotation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoRotationInput() {
    return this._enableAutoRotation;
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

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_rotate_days: cdktf.numberToTerraform(this._autoRotateDays),
      enable_auto_rotation: cdktf.booleanToTerraform(this._enableAutoRotation),
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_rotate_days: {
        value: cdktf.numberToHclTerraform(this._autoRotateDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_auto_rotation: {
        value: cdktf.booleanToHclTerraform(this._enableAutoRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
