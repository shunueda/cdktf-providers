// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetflowMonitorOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#id DataThunderNetflowMonitorOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of netflow monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#name DataThunderNetflowMonitorOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#oper DataThunderNetflowMonitorOper#oper}
  */
  readonly oper?: DataThunderNetflowMonitorOperOper;
}
export interface DataThunderNetflowMonitorOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#counter_polling_interval DataThunderNetflowMonitorOper#counter_polling_interval}
  */
  readonly counterPollingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#destination DataThunderNetflowMonitorOper#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#filter DataThunderNetflowMonitorOper#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#flow_timeout DataThunderNetflowMonitorOper#flow_timeout}
  */
  readonly flowTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#protocol DataThunderNetflowMonitorOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#resend_template_per_records DataThunderNetflowMonitorOper#resend_template_per_records}
  */
  readonly resendTemplatePerRecords?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#resend_template_timeout DataThunderNetflowMonitorOper#resend_template_timeout}
  */
  readonly resendTemplateTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#source_ip_addr DataThunderNetflowMonitorOper#source_ip_addr}
  */
  readonly sourceIpAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#source_ip_use_mgmt DataThunderNetflowMonitorOper#source_ip_use_mgmt}
  */
  readonly sourceIpUseMgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#status DataThunderNetflowMonitorOper#status}
  */
  readonly status?: string;
}

export function dataThunderNetflowMonitorOperOperToTerraform(struct?: DataThunderNetflowMonitorOperOperOutputReference | DataThunderNetflowMonitorOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter_polling_interval: cdktf.stringToTerraform(struct!.counterPollingInterval),
    destination: cdktf.stringToTerraform(struct!.destination),
    filter: cdktf.stringToTerraform(struct!.filter),
    flow_timeout: cdktf.stringToTerraform(struct!.flowTimeout),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    resend_template_per_records: cdktf.stringToTerraform(struct!.resendTemplatePerRecords),
    resend_template_timeout: cdktf.stringToTerraform(struct!.resendTemplateTimeout),
    source_ip_addr: cdktf.stringToTerraform(struct!.sourceIpAddr),
    source_ip_use_mgmt: cdktf.stringToTerraform(struct!.sourceIpUseMgmt),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderNetflowMonitorOperOperToHclTerraform(struct?: DataThunderNetflowMonitorOperOperOutputReference | DataThunderNetflowMonitorOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter_polling_interval: {
      value: cdktf.stringToHclTerraform(struct!.counterPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_timeout: {
      value: cdktf.stringToHclTerraform(struct!.flowTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resend_template_per_records: {
      value: cdktf.stringToHclTerraform(struct!.resendTemplatePerRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resend_template_timeout: {
      value: cdktf.stringToHclTerraform(struct!.resendTemplateTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_use_mgmt: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpUseMgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetflowMonitorOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetflowMonitorOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counterPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterPollingInterval = this._counterPollingInterval;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._flowTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowTimeout = this._flowTimeout;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._resendTemplatePerRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendTemplatePerRecords = this._resendTemplatePerRecords;
    }
    if (this._resendTemplateTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendTemplateTimeout = this._resendTemplateTimeout;
    }
    if (this._sourceIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpAddr = this._sourceIpAddr;
    }
    if (this._sourceIpUseMgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpUseMgmt = this._sourceIpUseMgmt;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetflowMonitorOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._counterPollingInterval = undefined;
      this._destination = undefined;
      this._filter = undefined;
      this._flowTimeout = undefined;
      this._protocol = undefined;
      this._resendTemplatePerRecords = undefined;
      this._resendTemplateTimeout = undefined;
      this._sourceIpAddr = undefined;
      this._sourceIpUseMgmt = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._counterPollingInterval = value.counterPollingInterval;
      this._destination = value.destination;
      this._filter = value.filter;
      this._flowTimeout = value.flowTimeout;
      this._protocol = value.protocol;
      this._resendTemplatePerRecords = value.resendTemplatePerRecords;
      this._resendTemplateTimeout = value.resendTemplateTimeout;
      this._sourceIpAddr = value.sourceIpAddr;
      this._sourceIpUseMgmt = value.sourceIpUseMgmt;
      this._status = value.status;
    }
  }

  // counter_polling_interval - computed: false, optional: true, required: false
  private _counterPollingInterval?: string; 
  public get counterPollingInterval() {
    return this.getStringAttribute('counter_polling_interval');
  }
  public set counterPollingInterval(value: string) {
    this._counterPollingInterval = value;
  }
  public resetCounterPollingInterval() {
    this._counterPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterPollingIntervalInput() {
    return this._counterPollingInterval;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // flow_timeout - computed: false, optional: true, required: false
  private _flowTimeout?: string; 
  public get flowTimeout() {
    return this.getStringAttribute('flow_timeout');
  }
  public set flowTimeout(value: string) {
    this._flowTimeout = value;
  }
  public resetFlowTimeout() {
    this._flowTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowTimeoutInput() {
    return this._flowTimeout;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // resend_template_per_records - computed: false, optional: true, required: false
  private _resendTemplatePerRecords?: string; 
  public get resendTemplatePerRecords() {
    return this.getStringAttribute('resend_template_per_records');
  }
  public set resendTemplatePerRecords(value: string) {
    this._resendTemplatePerRecords = value;
  }
  public resetResendTemplatePerRecords() {
    this._resendTemplatePerRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendTemplatePerRecordsInput() {
    return this._resendTemplatePerRecords;
  }

  // resend_template_timeout - computed: false, optional: true, required: false
  private _resendTemplateTimeout?: string; 
  public get resendTemplateTimeout() {
    return this.getStringAttribute('resend_template_timeout');
  }
  public set resendTemplateTimeout(value: string) {
    this._resendTemplateTimeout = value;
  }
  public resetResendTemplateTimeout() {
    this._resendTemplateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendTemplateTimeoutInput() {
    return this._resendTemplateTimeout;
  }

  // source_ip_addr - computed: false, optional: true, required: false
  private _sourceIpAddr?: string; 
  public get sourceIpAddr() {
    return this.getStringAttribute('source_ip_addr');
  }
  public set sourceIpAddr(value: string) {
    this._sourceIpAddr = value;
  }
  public resetSourceIpAddr() {
    this._sourceIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpAddrInput() {
    return this._sourceIpAddr;
  }

  // source_ip_use_mgmt - computed: false, optional: true, required: false
  private _sourceIpUseMgmt?: string; 
  public get sourceIpUseMgmt() {
    return this.getStringAttribute('source_ip_use_mgmt');
  }
  public set sourceIpUseMgmt(value: string) {
    this._sourceIpUseMgmt = value;
  }
  public resetSourceIpUseMgmt() {
    this._sourceIpUseMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpUseMgmtInput() {
    return this._sourceIpUseMgmt;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper thunder_netflow_monitor_oper}
*/
export class DataThunderNetflowMonitorOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_netflow_monitor_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetflowMonitorOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetflowMonitorOper to import
  * @param importFromId The id of the existing DataThunderNetflowMonitorOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetflowMonitorOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_netflow_monitor_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_monitor_oper thunder_netflow_monitor_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetflowMonitorOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetflowMonitorOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_netflow_monitor_oper',
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
    this._name = config.name;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderNetflowMonitorOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderNetflowMonitorOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderNetflowMonitorOperOperToTerraform(this._oper.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderNetflowMonitorOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetflowMonitorOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
