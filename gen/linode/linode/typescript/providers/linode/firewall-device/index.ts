// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/firewall_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the entity to create a Firewall device for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/firewall_device#entity_id FirewallDevice#entity_id}
  */
  readonly entityId: number;
  /**
  * The type of the entity to create a Firewall device for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/firewall_device#entity_type FirewallDevice#entity_type}
  */
  readonly entityType?: string;
  /**
  * The ID of the Firewall to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/firewall_device#firewall_id FirewallDevice#firewall_id}
  */
  readonly firewallId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/firewall_device linode_firewall_device}
*/
export class FirewallDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_firewall_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallDevice to import
  * @param importFromId The id of the existing FirewallDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/firewall_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_firewall_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/firewall_device linode_firewall_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_firewall_device',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entityId = config.entityId;
    this._entityType = config.entityType;
    this._firewallId = config.firewallId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: number; 
  public get entityId() {
    return this.getNumberAttribute('entity_id');
  }
  public set entityId(value: number) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_type - computed: true, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // firewall_id - computed: false, optional: false, required: true
  private _firewallId?: number; 
  public get firewallId() {
    return this.getNumberAttribute('firewall_id');
  }
  public set firewallId(value: number) {
    this._firewallId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity_id: cdktf.numberToTerraform(this._entityId),
      entity_type: cdktf.stringToTerraform(this._entityType),
      firewall_id: cdktf.numberToTerraform(this._firewallId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity_id: {
        value: cdktf.numberToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_id: {
        value: cdktf.numberToHclTerraform(this._firewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
