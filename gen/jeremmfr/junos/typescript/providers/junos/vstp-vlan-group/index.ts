// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VstpVlanGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Priority of the bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group#backup_bridge_priority VstpVlanGroup#backup_bridge_priority}
  */
  readonly backupBridgePriority?: string;
  /**
  * Priority of the bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group#bridge_priority VstpVlanGroup#bridge_priority}
  */
  readonly bridgePriority?: string;
  /**
  * Time spent in listening or learning state (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group#forward_delay VstpVlanGroup#forward_delay}
  */
  readonly forwardDelay?: number;
  /**
  * Time interval between configuration BPDUs (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group#hello_time VstpVlanGroup#hello_time}
  */
  readonly helloTime?: number;
  /**
  * Maximum age of received protocol bpdu (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group#max_age VstpVlanGroup#max_age}
  */
  readonly maxAge?: number;
  /**
  * VLAN group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group#name VstpVlanGroup#name}
  */
  readonly name: string;
  /**
  * Routing instance for vstp protocol if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group#routing_instance VstpVlanGroup#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * System identifier to represent this node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group#system_identifier VstpVlanGroup#system_identifier}
  */
  readonly systemIdentifier?: string;
  /**
  *  VLAN IDs or VLAN ID ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group#vlan VstpVlanGroup#vlan}
  */
  readonly vlan: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group junos_vstp_vlan_group}
*/
export class VstpVlanGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_vstp_vlan_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VstpVlanGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VstpVlanGroup to import
  * @param importFromId The id of the existing VstpVlanGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VstpVlanGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_vstp_vlan_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp_vlan_group junos_vstp_vlan_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VstpVlanGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VstpVlanGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_vstp_vlan_group',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupBridgePriority = config.backupBridgePriority;
    this._bridgePriority = config.bridgePriority;
    this._forwardDelay = config.forwardDelay;
    this._helloTime = config.helloTime;
    this._maxAge = config.maxAge;
    this._name = config.name;
    this._routingInstance = config.routingInstance;
    this._systemIdentifier = config.systemIdentifier;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_bridge_priority - computed: false, optional: true, required: false
  private _backupBridgePriority?: string; 
  public get backupBridgePriority() {
    return this.getStringAttribute('backup_bridge_priority');
  }
  public set backupBridgePriority(value: string) {
    this._backupBridgePriority = value;
  }
  public resetBackupBridgePriority() {
    this._backupBridgePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupBridgePriorityInput() {
    return this._backupBridgePriority;
  }

  // bridge_priority - computed: false, optional: true, required: false
  private _bridgePriority?: string; 
  public get bridgePriority() {
    return this.getStringAttribute('bridge_priority');
  }
  public set bridgePriority(value: string) {
    this._bridgePriority = value;
  }
  public resetBridgePriority() {
    this._bridgePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgePriorityInput() {
    return this._bridgePriority;
  }

  // forward_delay - computed: false, optional: true, required: false
  private _forwardDelay?: number; 
  public get forwardDelay() {
    return this.getNumberAttribute('forward_delay');
  }
  public set forwardDelay(value: number) {
    this._forwardDelay = value;
  }
  public resetForwardDelay() {
    this._forwardDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardDelayInput() {
    return this._forwardDelay;
  }

  // hello_time - computed: false, optional: true, required: false
  private _helloTime?: number; 
  public get helloTime() {
    return this.getNumberAttribute('hello_time');
  }
  public set helloTime(value: number) {
    this._helloTime = value;
  }
  public resetHelloTime() {
    this._helloTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloTimeInput() {
    return this._helloTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
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

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // system_identifier - computed: false, optional: true, required: false
  private _systemIdentifier?: string; 
  public get systemIdentifier() {
    return this.getStringAttribute('system_identifier');
  }
  public set systemIdentifier(value: string) {
    this._systemIdentifier = value;
  }
  public resetSystemIdentifier() {
    this._systemIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdentifierInput() {
    return this._systemIdentifier;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: string[]; 
  public get vlan() {
    return cdktf.Fn.tolist(this.getListAttribute('vlan'));
  }
  public set vlan(value: string[]) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_bridge_priority: cdktf.stringToTerraform(this._backupBridgePriority),
      bridge_priority: cdktf.stringToTerraform(this._bridgePriority),
      forward_delay: cdktf.numberToTerraform(this._forwardDelay),
      hello_time: cdktf.numberToTerraform(this._helloTime),
      max_age: cdktf.numberToTerraform(this._maxAge),
      name: cdktf.stringToTerraform(this._name),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      system_identifier: cdktf.stringToTerraform(this._systemIdentifier),
      vlan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_bridge_priority: {
        value: cdktf.stringToHclTerraform(this._backupBridgePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge_priority: {
        value: cdktf.stringToHclTerraform(this._bridgePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_delay: {
        value: cdktf.numberToHclTerraform(this._forwardDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hello_time: {
        value: cdktf.numberToHclTerraform(this._helloTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_age: {
        value: cdktf.numberToHclTerraform(this._maxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_identifier: {
        value: cdktf.stringToHclTerraform(this._systemIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
