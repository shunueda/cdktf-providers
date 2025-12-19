// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_monitor_custom_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetflowMonitorCustomRecordAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_monitor_custom_record#id NetflowMonitorCustomRecordA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_monitor_custom_record#monitor_name NetflowMonitorCustomRecordA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_monitor_custom_record#uuid NetflowMonitorCustomRecordA#uuid}
  */
  readonly uuid?: string;
  /**
  * custom_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_monitor_custom_record#custom_cfg NetflowMonitorCustomRecordA#custom_cfg}
  */
  readonly customCfg?: NetflowMonitorCustomRecordCustomCfgA[] | cdktf.IResolvable;
}
export interface NetflowMonitorCustomRecordCustomCfgA {
  /**
  * 'sesn-event-nat44-creation': Export NAT44 session creation events; 'sesn-event-nat44-deletion': Export NAT44 session deletion events; 'sesn-event-nat64-creation': Export NAT64 session creation events; 'sesn-event-nat64-deletion': Export NAT64 session deletion events; 'sesn-event-dslite-creation': Export Dslite session creation events; 'sesn-event-dslite-deletion': Export Dslite session deletion events; 'sesn-event-fw4-creation': Export FW4 session creation events; 'sesn-event-fw4-deletion': Export FW4 session deletion events; 'sesn-event-fw6-creation': Export FW6 session creation events; 'sesn-event-fw6-deletion': Export FW6 session deletion events; 'deny-reset-event-fw4': Export FW4 Deny Reset events; 'deny-reset-event-fw6': Export FW6 Deny Reset events; 'port-mapping-nat44-creation': Export NAT44 Port Mapping Creation Event; 'port-mapping-nat44-deletion': Export NAT44 Port Mapping Deletion Event; 'port-mapping-nat64-creation': Export NAT64 Port Mapping Creation Event; 'port-mapping-nat64-deletion': Export NAT64 Port Mapping Deletion Event; 'port-mapping-dslite-creation': Export Dslite Port Mapping Creation Event; 'port-mapping-dslite-deletion': Export Dslite Port Mapping Deletion Event; 'port-batch-nat44-creation': Export NAT44 Port Batch Creation Event; 'port-batch-nat44-deletion': Export NAT44 Port Batch Deletion Event; 'port-batch-nat64-creation': Export NAT64 Port Batch Creation Event; 'port-batch-nat64-deletion': Export NAT64 Port Batch Deletion Event; 'port-batch-dslite-creation': Export Dslite Port Batch Creation Event; 'port-batch-dslite-deletion': Export Dslite Port Batch Deletion Event; 'port-batch-v2-nat44-creation': Export NAT44 Port Batch v2 Creation Event; 'port-batch-v2-nat44-deletion': Export NAT44 Port Batch v2 Deletion Event; 'port-batch-v2-nat64-creation': Export NAT64 Port Batch v2 Creation Event; 'port-batch-v2-nat64-deletion': Export NAT64 Port Batch v2 Deletion Event; 'port-batch-v2-dslite-creation': Export Dslite Port Batch v2 Creation Event; 'port-batch-v2-dslite-deletion': Export Dslite Port Batch v2 Deletion Event; 'gtp-c-tunnel-event': Export GTP Control Tunnel Creation or Deletion Events; 'gtp-u-tunnel-event': Export GTP User Tunnel Creation or Deletion Events; 'gtp-deny-event': Export GTP Deny events on GTP C/U Tunnels; 'gtp-info-event': Export GTP Info events on GTP C/U Tunnels; 'fw-ddos-entry-creation': Export FW iDDoS Entry Created Record; 'fw-ddos-entry-deletion': Export FW iDDoS Entry Deleted Record; 'fw-session-limit-exceeded': Export FW Session Limit Exceeded Record; 'cgn-ddos-l3-entry-creation': Export CGN iDDoS L3 Entry Creation; 'cgn-ddos-l3-entry-deletion': Export CGN iDDoS L3 Entry Deletion; 'cgn-ddos-l4-entry-creation': Export CGN iDDoS L4 Entry Creation; 'cgn-ddos-l4-entry-deletion': Export CGN iDDoS L4 Entry Deletion; 'gtp-rate-limit-periodic': Export GTP Rate Limit Periodic;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_monitor_custom_record#event NetflowMonitorCustomRecordA#event}
  */
  readonly event?: string;
  /**
  * Custom IPFIX Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_monitor_custom_record#ipfix_template NetflowMonitorCustomRecordA#ipfix_template}
  */
  readonly ipfixTemplate?: string;
}

export function netflowMonitorCustomRecordCustomCfgAToTerraform(struct?: NetflowMonitorCustomRecordCustomCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    ipfix_template: cdktf.stringToTerraform(struct!.ipfixTemplate),
  }
}


export function netflowMonitorCustomRecordCustomCfgAToHclTerraform(struct?: NetflowMonitorCustomRecordCustomCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipfix_template: {
      value: cdktf.stringToHclTerraform(struct!.ipfixTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorCustomRecordCustomCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetflowMonitorCustomRecordCustomCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._ipfixTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfixTemplate = this._ipfixTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorCustomRecordCustomCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event = undefined;
      this._ipfixTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event = value.event;
      this._ipfixTemplate = value.ipfixTemplate;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // ipfix_template - computed: false, optional: true, required: false
  private _ipfixTemplate?: string; 
  public get ipfixTemplate() {
    return this.getStringAttribute('ipfix_template');
  }
  public set ipfixTemplate(value: string) {
    this._ipfixTemplate = value;
  }
  public resetIpfixTemplate() {
    this._ipfixTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfixTemplateInput() {
    return this._ipfixTemplate;
  }
}

export class NetflowMonitorCustomRecordCustomCfgAList extends cdktf.ComplexList {
  public internalValue? : NetflowMonitorCustomRecordCustomCfgA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetflowMonitorCustomRecordCustomCfgAOutputReference {
    return new NetflowMonitorCustomRecordCustomCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_monitor_custom_record thunder_netflow_monitor_custom_record}
*/
export class NetflowMonitorCustomRecordA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_netflow_monitor_custom_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetflowMonitorCustomRecordA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetflowMonitorCustomRecordA to import
  * @param importFromId The id of the existing NetflowMonitorCustomRecordA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_monitor_custom_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetflowMonitorCustomRecordA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_netflow_monitor_custom_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_monitor_custom_record thunder_netflow_monitor_custom_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetflowMonitorCustomRecordAConfig
  */
  public constructor(scope: Construct, id: string, config: NetflowMonitorCustomRecordAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_netflow_monitor_custom_record',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._monitorName = config.monitorName;
    this._uuid = config.uuid;
    this._customCfg.internalValue = config.customCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // custom_cfg - computed: false, optional: true, required: false
  private _customCfg = new NetflowMonitorCustomRecordCustomCfgAList(this, "custom_cfg", false);
  public get customCfg() {
    return this._customCfg;
  }
  public putCustomCfg(value: NetflowMonitorCustomRecordCustomCfgA[] | cdktf.IResolvable) {
    this._customCfg.internalValue = value;
  }
  public resetCustomCfg() {
    this._customCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCfgInput() {
    return this._customCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      uuid: cdktf.stringToTerraform(this._uuid),
      custom_cfg: cdktf.listMapper(netflowMonitorCustomRecordCustomCfgAToTerraform, true)(this._customCfg.internalValue),
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
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_cfg: {
        value: cdktf.listMapperHcl(netflowMonitorCustomRecordCustomCfgAToHclTerraform, true)(this._customCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowMonitorCustomRecordCustomCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
