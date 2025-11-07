// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbZoneServiceDnsMxRecordOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper#id DataThunderGslbZoneServiceDnsMxRecordOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper#mx_name DataThunderGslbZoneServiceDnsMxRecordOper#mx_name}
  */
  readonly mxName: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper#name DataThunderGslbZoneServiceDnsMxRecordOper#name}
  */
  readonly name: string;
  /**
  * ServiceName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper#service_name DataThunderGslbZoneServiceDnsMxRecordOper#service_name}
  */
  readonly serviceName: string;
  /**
  * ServicePort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper#service_port DataThunderGslbZoneServiceDnsMxRecordOper#service_port}
  */
  readonly servicePort: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper#oper DataThunderGslbZoneServiceDnsMxRecordOper#oper}
  */
  readonly oper?: DataThunderGslbZoneServiceDnsMxRecordOperOper;
}
export interface DataThunderGslbZoneServiceDnsMxRecordOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper#hits DataThunderGslbZoneServiceDnsMxRecordOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper#last_server DataThunderGslbZoneServiceDnsMxRecordOper#last_server}
  */
  readonly lastServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper#priority DataThunderGslbZoneServiceDnsMxRecordOper#priority}
  */
  readonly priority?: number;
}

export function dataThunderGslbZoneServiceDnsMxRecordOperOperToTerraform(struct?: DataThunderGslbZoneServiceDnsMxRecordOperOperOutputReference | DataThunderGslbZoneServiceDnsMxRecordOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
    last_server: cdktf.stringToTerraform(struct!.lastServer),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataThunderGslbZoneServiceDnsMxRecordOperOperToHclTerraform(struct?: DataThunderGslbZoneServiceDnsMxRecordOperOperOutputReference | DataThunderGslbZoneServiceDnsMxRecordOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_server: {
      value: cdktf.stringToHclTerraform(struct!.lastServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneServiceDnsMxRecordOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneServiceDnsMxRecordOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._lastServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastServer = this._lastServer;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneServiceDnsMxRecordOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
      this._lastServer = undefined;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
      this._lastServer = value.lastServer;
      this._priority = value.priority;
    }
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // last_server - computed: false, optional: true, required: false
  private _lastServer?: string; 
  public get lastServer() {
    return this.getStringAttribute('last_server');
  }
  public set lastServer(value: string) {
    this._lastServer = value;
  }
  public resetLastServer() {
    this._lastServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastServerInput() {
    return this._lastServer;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper thunder_gslb_zone_service_dns_mx_record_oper}
*/
export class DataThunderGslbZoneServiceDnsMxRecordOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_service_dns_mx_record_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbZoneServiceDnsMxRecordOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbZoneServiceDnsMxRecordOper to import
  * @param importFromId The id of the existing DataThunderGslbZoneServiceDnsMxRecordOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbZoneServiceDnsMxRecordOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_service_dns_mx_record_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_service_dns_mx_record_oper thunder_gslb_zone_service_dns_mx_record_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbZoneServiceDnsMxRecordOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbZoneServiceDnsMxRecordOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_service_dns_mx_record_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._mxName = config.mxName;
    this._name = config.name;
    this._serviceName = config.serviceName;
    this._servicePort = config.servicePort;
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

  // mx_name - computed: false, optional: false, required: true
  private _mxName?: string; 
  public get mxName() {
    return this.getStringAttribute('mx_name');
  }
  public set mxName(value: string) {
    this._mxName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mxNameInput() {
    return this._mxName;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: string; 
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
  public set servicePort(value: string) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbZoneServiceDnsMxRecordOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneServiceDnsMxRecordOperOper) {
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
      mx_name: cdktf.stringToTerraform(this._mxName),
      name: cdktf.stringToTerraform(this._name),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_port: cdktf.stringToTerraform(this._servicePort),
      oper: dataThunderGslbZoneServiceDnsMxRecordOperOperToTerraform(this._oper.internalValue),
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
      mx_name: {
        value: cdktf.stringToHclTerraform(this._mxName),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_port: {
        value: cdktf.stringToHclTerraform(this._servicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderGslbZoneServiceDnsMxRecordOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneServiceDnsMxRecordOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
