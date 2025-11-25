// https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#environment_address Environment#environment_address}
  */
  readonly environmentAddress: string;
  /**
  * ID of the Portainer endpoint group. Default is 1 (Unassigned).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#group_id Environment#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#id Environment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * Public IP/URL used by Portainer for Published Ports (maps to PublicURL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#public_ip Environment#public_ip}
  */
  readonly publicIp?: string;
  /**
  * List of tag IDs to assign to the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#tag_ids Environment#tag_ids}
  */
  readonly tagIds?: number[];
  /**
  * Map of team IDs to role IDs (e.g. teamID -> roleID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#team_access_policies Environment#team_access_policies}
  */
  readonly teamAccessPolicies?: { [key: string]: number };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#tls_ca_cert Environment#tls_ca_cert}
  */
  readonly tlsCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#tls_cert Environment#tls_cert}
  */
  readonly tlsCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#tls_enabled Environment#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#tls_key Environment#tls_key}
  */
  readonly tlsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#tls_skip_client_verify Environment#tls_skip_client_verify}
  */
  readonly tlsSkipClientVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#tls_skip_verify Environment#tls_skip_verify}
  */
  readonly tlsSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Environment type: 1 = Docker, 2 = Agent, 3 = Azure, 4 = Edge Agent, 5 = Kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#type Environment#type}
  */
  readonly type: number;
  /**
  * Map of user IDs to role IDs (e.g. userID -> roleID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#user_access_policies Environment#user_access_policies}
  */
  readonly userAccessPolicies?: { [key: string]: number };
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment portainer_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/environment portainer_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_environment',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentAddress = config.environmentAddress;
    this._groupId = config.groupId;
    this._id = config.id;
    this._name = config.name;
    this._publicIp = config.publicIp;
    this._tagIds = config.tagIds;
    this._teamAccessPolicies = config.teamAccessPolicies;
    this._tlsCaCert = config.tlsCaCert;
    this._tlsCert = config.tlsCert;
    this._tlsEnabled = config.tlsEnabled;
    this._tlsKey = config.tlsKey;
    this._tlsSkipClientVerify = config.tlsSkipClientVerify;
    this._tlsSkipVerify = config.tlsSkipVerify;
    this._type = config.type;
    this._userAccessPolicies = config.userAccessPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_id - computed: true, optional: false, required: false
  public get edgeId() {
    return this.getStringAttribute('edge_id');
  }

  // edge_key - computed: true, optional: false, required: false
  public get edgeKey() {
    return this.getStringAttribute('edge_key');
  }

  // environment_address - computed: false, optional: false, required: true
  private _environmentAddress?: string; 
  public get environmentAddress() {
    return this.getStringAttribute('environment_address');
  }
  public set environmentAddress(value: string) {
    this._environmentAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentAddressInput() {
    return this._environmentAddress;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // tag_ids - computed: false, optional: true, required: false
  private _tagIds?: number[]; 
  public get tagIds() {
    return this.getNumberListAttribute('tag_ids');
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // team_access_policies - computed: false, optional: true, required: false
  private _teamAccessPolicies?: { [key: string]: number }; 
  public get teamAccessPolicies() {
    return this.getNumberMapAttribute('team_access_policies');
  }
  public set teamAccessPolicies(value: { [key: string]: number }) {
    this._teamAccessPolicies = value;
  }
  public resetTeamAccessPolicies() {
    this._teamAccessPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamAccessPoliciesInput() {
    return this._teamAccessPolicies;
  }

  // tls_ca_cert - computed: false, optional: true, required: false
  private _tlsCaCert?: string; 
  public get tlsCaCert() {
    return this.getStringAttribute('tls_ca_cert');
  }
  public set tlsCaCert(value: string) {
    this._tlsCaCert = value;
  }
  public resetTlsCaCert() {
    this._tlsCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaCertInput() {
    return this._tlsCaCert;
  }

  // tls_cert - computed: false, optional: true, required: false
  private _tlsCert?: string; 
  public get tlsCert() {
    return this.getStringAttribute('tls_cert');
  }
  public set tlsCert(value: string) {
    this._tlsCert = value;
  }
  public resetTlsCert() {
    this._tlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertInput() {
    return this._tlsCert;
  }

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }

  // tls_key - computed: false, optional: true, required: false
  private _tlsKey?: string; 
  public get tlsKey() {
    return this.getStringAttribute('tls_key');
  }
  public set tlsKey(value: string) {
    this._tlsKey = value;
  }
  public resetTlsKey() {
    this._tlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeyInput() {
    return this._tlsKey;
  }

  // tls_skip_client_verify - computed: false, optional: true, required: false
  private _tlsSkipClientVerify?: boolean | cdktf.IResolvable; 
  public get tlsSkipClientVerify() {
    return this.getBooleanAttribute('tls_skip_client_verify');
  }
  public set tlsSkipClientVerify(value: boolean | cdktf.IResolvable) {
    this._tlsSkipClientVerify = value;
  }
  public resetTlsSkipClientVerify() {
    this._tlsSkipClientVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSkipClientVerifyInput() {
    return this._tlsSkipClientVerify;
  }

  // tls_skip_verify - computed: false, optional: true, required: false
  private _tlsSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsSkipVerify() {
    return this.getBooleanAttribute('tls_skip_verify');
  }
  public set tlsSkipVerify(value: boolean | cdktf.IResolvable) {
    this._tlsSkipVerify = value;
  }
  public resetTlsSkipVerify() {
    this._tlsSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSkipVerifyInput() {
    return this._tlsSkipVerify;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_access_policies - computed: false, optional: true, required: false
  private _userAccessPolicies?: { [key: string]: number }; 
  public get userAccessPolicies() {
    return this.getNumberMapAttribute('user_access_policies');
  }
  public set userAccessPolicies(value: { [key: string]: number }) {
    this._userAccessPolicies = value;
  }
  public resetUserAccessPolicies() {
    this._userAccessPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessPoliciesInput() {
    return this._userAccessPolicies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_address: cdktf.stringToTerraform(this._environmentAddress),
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
      team_access_policies: cdktf.hashMapper(cdktf.numberToTerraform)(this._teamAccessPolicies),
      tls_ca_cert: cdktf.stringToTerraform(this._tlsCaCert),
      tls_cert: cdktf.stringToTerraform(this._tlsCert),
      tls_enabled: cdktf.booleanToTerraform(this._tlsEnabled),
      tls_key: cdktf.stringToTerraform(this._tlsKey),
      tls_skip_client_verify: cdktf.booleanToTerraform(this._tlsSkipClientVerify),
      tls_skip_verify: cdktf.booleanToTerraform(this._tlsSkipVerify),
      type: cdktf.numberToTerraform(this._type),
      user_access_policies: cdktf.hashMapper(cdktf.numberToTerraform)(this._userAccessPolicies),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_address: {
        value: cdktf.stringToHclTerraform(this._environmentAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      public_ip: {
        value: cdktf.stringToHclTerraform(this._publicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      team_access_policies: {
        value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(this._teamAccessPolicies),
        isBlock: false,
        type: "map",
        storageClassType: "numberMap",
      },
      tls_ca_cert: {
        value: cdktf.stringToHclTerraform(this._tlsCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_cert: {
        value: cdktf.stringToHclTerraform(this._tlsCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_key: {
        value: cdktf.stringToHclTerraform(this._tlsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_skip_client_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsSkipClientVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_access_policies: {
        value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(this._userAccessPolicies),
        isBlock: false,
        type: "map",
        storageClassType: "numberMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
