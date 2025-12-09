// https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVercelTeamConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the existing Vercel Team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_config#id DataVercelTeamConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataVercelTeamConfigRemoteCaching {
}

export function dataVercelTeamConfigRemoteCachingToTerraform(struct?: DataVercelTeamConfigRemoteCaching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelTeamConfigRemoteCachingToHclTerraform(struct?: DataVercelTeamConfigRemoteCaching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelTeamConfigRemoteCachingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVercelTeamConfigRemoteCaching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelTeamConfigRemoteCaching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataVercelTeamConfigSamlRoles {
}

export function dataVercelTeamConfigSamlRolesToTerraform(struct?: DataVercelTeamConfigSamlRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelTeamConfigSamlRolesToHclTerraform(struct?: DataVercelTeamConfigSamlRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelTeamConfigSamlRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataVercelTeamConfigSamlRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelTeamConfigSamlRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_group_id - computed: true, optional: false, required: false
  public get accessGroupId() {
    return this.getStringAttribute('access_group_id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataVercelTeamConfigSamlRolesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataVercelTeamConfigSamlRolesOutputReference {
    return new DataVercelTeamConfigSamlRolesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataVercelTeamConfigSaml {
}

export function dataVercelTeamConfigSamlToTerraform(struct?: DataVercelTeamConfigSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelTeamConfigSamlToHclTerraform(struct?: DataVercelTeamConfigSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelTeamConfigSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVercelTeamConfigSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelTeamConfigSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforced - computed: true, optional: false, required: false
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }

  // roles - computed: true, optional: false, required: false
  private _roles = new DataVercelTeamConfigSamlRolesMap(this, "roles");
  public get roles() {
    return this._roles;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_config vercel_team_config}
*/
export class DataVercelTeamConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_team_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVercelTeamConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVercelTeamConfig to import
  * @param importFromId The id of the existing DataVercelTeamConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVercelTeamConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_team_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/data-sources/team_config vercel_team_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVercelTeamConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataVercelTeamConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_team_config',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.1.0',
        providerVersionConstraint: '4.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_domain - computed: true, optional: false, required: false
  public get emailDomain() {
    return this.getStringAttribute('email_domain');
  }

  // enable_preview_feedback - computed: true, optional: false, required: false
  public get enablePreviewFeedback() {
    return this.getStringAttribute('enable_preview_feedback');
  }

  // enable_production_feedback - computed: true, optional: false, required: false
  public get enableProductionFeedback() {
    return this.getStringAttribute('enable_production_feedback');
  }

  // hide_ip_addresses - computed: true, optional: false, required: false
  public get hideIpAddresses() {
    return this.getBooleanAttribute('hide_ip_addresses');
  }

  // hide_ip_addresses_in_log_drains - computed: true, optional: false, required: false
  public get hideIpAddressesInLogDrains() {
    return this.getBooleanAttribute('hide_ip_addresses_in_log_drains');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // invite_code - computed: true, optional: false, required: false
  public get inviteCode() {
    return this.getStringAttribute('invite_code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // preview_deployment_suffix - computed: true, optional: false, required: false
  public get previewDeploymentSuffix() {
    return this.getStringAttribute('preview_deployment_suffix');
  }

  // remote_caching - computed: true, optional: false, required: false
  private _remoteCaching = new DataVercelTeamConfigRemoteCachingOutputReference(this, "remote_caching");
  public get remoteCaching() {
    return this._remoteCaching;
  }

  // saml - computed: true, optional: false, required: false
  private _saml = new DataVercelTeamConfigSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }

  // sensitive_environment_variable_policy - computed: true, optional: false, required: false
  public get sensitiveEnvironmentVariablePolicy() {
    return this.getStringAttribute('sensitive_environment_variable_policy');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
