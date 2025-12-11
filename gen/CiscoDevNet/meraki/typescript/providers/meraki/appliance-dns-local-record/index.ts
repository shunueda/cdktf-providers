// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceDnsLocalRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP for the DNS record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_record#address ApplianceDnsLocalRecord#address}
  */
  readonly address: string;
  /**
  * Hostname for the DNS record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_record#hostname ApplianceDnsLocalRecord#hostname}
  */
  readonly hostname: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_record#organization_id ApplianceDnsLocalRecord#organization_id}
  */
  readonly organizationId: string;
  /**
  * Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_record#profile_id ApplianceDnsLocalRecord#profile_id}
  */
  readonly profileId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_record meraki_appliance_dns_local_record}
*/
export class ApplianceDnsLocalRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_dns_local_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceDnsLocalRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceDnsLocalRecord to import
  * @param importFromId The id of the existing ApplianceDnsLocalRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceDnsLocalRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_dns_local_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_dns_local_record meraki_appliance_dns_local_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceDnsLocalRecordConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceDnsLocalRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_dns_local_record',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._hostname = config.hostname;
    this._organizationId = config.organizationId;
    this._profileId = config.profileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      hostname: cdktf.stringToTerraform(this._hostname),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      profile_id: cdktf.stringToTerraform(this._profileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
