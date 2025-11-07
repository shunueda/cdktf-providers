// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_dns_ns_record_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbZoneDnsNsRecordOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_dns_ns_record_oper#id DataThunderGslbZoneDnsNsRecordOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_dns_ns_record_oper#name DataThunderGslbZoneDnsNsRecordOper#name}
  */
  readonly name: string;
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_dns_ns_record_oper#ns_name DataThunderGslbZoneDnsNsRecordOper#ns_name}
  */
  readonly nsName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_dns_ns_record_oper#oper DataThunderGslbZoneDnsNsRecordOper#oper}
  */
  readonly oper?: DataThunderGslbZoneDnsNsRecordOperOper;
}
export interface DataThunderGslbZoneDnsNsRecordOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_dns_ns_record_oper#hits DataThunderGslbZoneDnsNsRecordOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_dns_ns_record_oper#last_server DataThunderGslbZoneDnsNsRecordOper#last_server}
  */
  readonly lastServer?: string;
}

export function dataThunderGslbZoneDnsNsRecordOperOperToTerraform(struct?: DataThunderGslbZoneDnsNsRecordOperOperOutputReference | DataThunderGslbZoneDnsNsRecordOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hits: cdktf.numberToTerraform(struct!.hits),
    last_server: cdktf.stringToTerraform(struct!.lastServer),
  }
}


export function dataThunderGslbZoneDnsNsRecordOperOperToHclTerraform(struct?: DataThunderGslbZoneDnsNsRecordOperOperOutputReference | DataThunderGslbZoneDnsNsRecordOperOper): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbZoneDnsNsRecordOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneDnsNsRecordOperOper | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneDnsNsRecordOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hits = undefined;
      this._lastServer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hits = value.hits;
      this._lastServer = value.lastServer;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_dns_ns_record_oper thunder_gslb_zone_dns_ns_record_oper}
*/
export class DataThunderGslbZoneDnsNsRecordOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_dns_ns_record_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbZoneDnsNsRecordOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbZoneDnsNsRecordOper to import
  * @param importFromId The id of the existing DataThunderGslbZoneDnsNsRecordOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_dns_ns_record_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbZoneDnsNsRecordOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_dns_ns_record_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_zone_dns_ns_record_oper thunder_gslb_zone_dns_ns_record_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbZoneDnsNsRecordOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbZoneDnsNsRecordOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_dns_ns_record_oper',
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
    this._name = config.name;
    this._nsName = config.nsName;
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

  // ns_name - computed: false, optional: false, required: true
  private _nsName?: string; 
  public get nsName() {
    return this.getStringAttribute('ns_name');
  }
  public set nsName(value: string) {
    this._nsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsNameInput() {
    return this._nsName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbZoneDnsNsRecordOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneDnsNsRecordOperOper) {
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
      ns_name: cdktf.stringToTerraform(this._nsName),
      oper: dataThunderGslbZoneDnsNsRecordOperOperToTerraform(this._oper.internalValue),
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
      ns_name: {
        value: cdktf.stringToHclTerraform(this._nsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderGslbZoneDnsNsRecordOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneDnsNsRecordOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
