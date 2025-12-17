// https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/integration_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The External ID defined in the trust relationship to ensure OpsLevel is the only third party assuming this role (See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html for more details).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/integration_aws#external_id IntegrationAws#external_id}
  */
  readonly externalId: string;
  /**
  * The IAM role OpsLevel uses in order to access the AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/integration_aws#iam_role IntegrationAws#iam_role}
  */
  readonly iamRole: string;
  /**
  * The name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/integration_aws#name IntegrationAws#name}
  */
  readonly name: string;
  /**
  * Allow tags imported from AWS to override ownership set in OpsLevel directly. Max 5 (default = ["owner"])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/integration_aws#ownership_tag_keys IntegrationAws#ownership_tag_keys}
  */
  readonly ownershipTagKeys?: string[];
  /**
  * Allow tags imported from AWS to override ownership set in OpsLevel directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/integration_aws#ownership_tag_overrides IntegrationAws#ownership_tag_overrides}
  */
  readonly ownershipTagOverrides?: boolean | cdktf.IResolvable;
  /**
  * Overrides the AWS region(s) that will be synchronized by this integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/integration_aws#region_override IntegrationAws#region_override}
  */
  readonly regionOverride?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/integration_aws opslevel_integration_aws}
*/
export class IntegrationAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_integration_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAws to import
  * @param importFromId The id of the existing IntegrationAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/integration_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_integration_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/integration_aws opslevel_integration_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_integration_aws',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalId = config.externalId;
    this._iamRole = config.iamRole;
    this._name = config.name;
    this._ownershipTagKeys = config.ownershipTagKeys;
    this._ownershipTagOverrides = config.ownershipTagOverrides;
    this._regionOverride = config.regionOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // iam_role - computed: false, optional: false, required: true
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // ownership_tag_keys - computed: true, optional: true, required: false
  private _ownershipTagKeys?: string[]; 
  public get ownershipTagKeys() {
    return this.getListAttribute('ownership_tag_keys');
  }
  public set ownershipTagKeys(value: string[]) {
    this._ownershipTagKeys = value;
  }
  public resetOwnershipTagKeys() {
    this._ownershipTagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipTagKeysInput() {
    return this._ownershipTagKeys;
  }

  // ownership_tag_overrides - computed: true, optional: true, required: false
  private _ownershipTagOverrides?: boolean | cdktf.IResolvable; 
  public get ownershipTagOverrides() {
    return this.getBooleanAttribute('ownership_tag_overrides');
  }
  public set ownershipTagOverrides(value: boolean | cdktf.IResolvable) {
    this._ownershipTagOverrides = value;
  }
  public resetOwnershipTagOverrides() {
    this._ownershipTagOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipTagOverridesInput() {
    return this._ownershipTagOverrides;
  }

  // region_override - computed: false, optional: true, required: false
  private _regionOverride?: string[]; 
  public get regionOverride() {
    return this.getListAttribute('region_override');
  }
  public set regionOverride(value: string[]) {
    this._regionOverride = value;
  }
  public resetRegionOverride() {
    this._regionOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionOverrideInput() {
    return this._regionOverride;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_id: cdktf.stringToTerraform(this._externalId),
      iam_role: cdktf.stringToTerraform(this._iamRole),
      name: cdktf.stringToTerraform(this._name),
      ownership_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ownershipTagKeys),
      ownership_tag_overrides: cdktf.booleanToTerraform(this._ownershipTagOverrides),
      region_override: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regionOverride),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_role: {
        value: cdktf.stringToHclTerraform(this._iamRole),
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
      ownership_tag_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ownershipTagKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ownership_tag_overrides: {
        value: cdktf.booleanToHclTerraform(this._ownershipTagOverrides),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region_override: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regionOverride),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
