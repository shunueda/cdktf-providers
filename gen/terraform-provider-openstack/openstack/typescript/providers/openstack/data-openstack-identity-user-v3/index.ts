// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenstackIdentityUserV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3#domain_id DataOpenstackIdentityUserV3#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3#enabled DataOpenstackIdentityUserV3#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3#id DataOpenstackIdentityUserV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3#idp_id DataOpenstackIdentityUserV3#idp_id}
  */
  readonly idpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3#name DataOpenstackIdentityUserV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3#password_expires_at DataOpenstackIdentityUserV3#password_expires_at}
  */
  readonly passwordExpiresAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3#protocol_id DataOpenstackIdentityUserV3#protocol_id}
  */
  readonly protocolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3#region DataOpenstackIdentityUserV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3#unique_id DataOpenstackIdentityUserV3#unique_id}
  */
  readonly uniqueId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3 openstack_identity_user_v3}
*/
export class DataOpenstackIdentityUserV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_identity_user_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenstackIdentityUserV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenstackIdentityUserV3 to import
  * @param importFromId The id of the existing DataOpenstackIdentityUserV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenstackIdentityUserV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_identity_user_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/data-sources/identity_user_v3 openstack_identity_user_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenstackIdentityUserV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpenstackIdentityUserV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'openstack_identity_user_v3',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainId = config.domainId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._idpId = config.idpId;
    this._name = config.name;
    this._passwordExpiresAt = config.passwordExpiresAt;
    this._protocolId = config.protocolId;
    this._region = config.region;
    this._uniqueId = config.uniqueId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_project_id - computed: true, optional: false, required: false
  public get defaultProjectId() {
    return this.getStringAttribute('default_project_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // idp_id - computed: false, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password_expires_at - computed: false, optional: true, required: false
  private _passwordExpiresAt?: string; 
  public get passwordExpiresAt() {
    return this.getStringAttribute('password_expires_at');
  }
  public set passwordExpiresAt(value: string) {
    this._passwordExpiresAt = value;
  }
  public resetPasswordExpiresAt() {
    this._passwordExpiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiresAtInput() {
    return this._passwordExpiresAt;
  }

  // protocol_id - computed: false, optional: true, required: false
  private _protocolId?: string; 
  public get protocolId() {
    return this.getStringAttribute('protocol_id');
  }
  public set protocolId(value: string) {
    this._protocolId = value;
  }
  public resetProtocolId() {
    this._protocolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIdInput() {
    return this._protocolId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // unique_id - computed: false, optional: true, required: false
  private _uniqueId?: string; 
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }
  public set uniqueId(value: string) {
    this._uniqueId = value;
  }
  public resetUniqueId() {
    this._uniqueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdInput() {
    return this._uniqueId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      idp_id: cdktf.stringToTerraform(this._idpId),
      name: cdktf.stringToTerraform(this._name),
      password_expires_at: cdktf.stringToTerraform(this._passwordExpiresAt),
      protocol_id: cdktf.stringToTerraform(this._protocolId),
      region: cdktf.stringToTerraform(this._region),
      unique_id: cdktf.stringToTerraform(this._uniqueId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      idp_id: {
        value: cdktf.stringToHclTerraform(this._idpId),
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
      password_expires_at: {
        value: cdktf.stringToHclTerraform(this._passwordExpiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_id: {
        value: cdktf.stringToHclTerraform(this._protocolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unique_id: {
        value: cdktf.stringToHclTerraform(this._uniqueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
