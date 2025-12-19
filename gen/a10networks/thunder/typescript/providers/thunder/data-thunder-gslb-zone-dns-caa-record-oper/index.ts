// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_dns_caa_record_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbZoneDnsCaaRecordOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Issuer Critical Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_dns_caa_record_oper#critical_flag DataThunderGslbZoneDnsCaaRecordOper#critical_flag}
  */
  readonly criticalFlag: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_dns_caa_record_oper#id DataThunderGslbZoneDnsCaaRecordOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify other property tags, only allowed lowercase alphanumeric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_dns_caa_record_oper#property_tag DataThunderGslbZoneDnsCaaRecordOper#property_tag}
  */
  readonly propertyTag: string;
  /**
  * Specify the Issuer Domain Name or a URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_dns_caa_record_oper#rdata DataThunderGslbZoneDnsCaaRecordOper#rdata}
  */
  readonly rdata: string;
  /**
  * Zone_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_dns_caa_record_oper#zone_name DataThunderGslbZoneDnsCaaRecordOper#zone_name}
  */
  readonly zoneName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_dns_caa_record_oper#oper DataThunderGslbZoneDnsCaaRecordOper#oper}
  */
  readonly oper?: DataThunderGslbZoneDnsCaaRecordOperOper;
}
export interface DataThunderGslbZoneDnsCaaRecordOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_dns_caa_record_oper#last_server DataThunderGslbZoneDnsCaaRecordOper#last_server}
  */
  readonly lastServer?: string;
}

export function dataThunderGslbZoneDnsCaaRecordOperOperToTerraform(struct?: DataThunderGslbZoneDnsCaaRecordOperOperOutputReference | DataThunderGslbZoneDnsCaaRecordOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_server: cdktf.stringToTerraform(struct!.lastServer),
  }
}


export function dataThunderGslbZoneDnsCaaRecordOperOperToHclTerraform(struct?: DataThunderGslbZoneDnsCaaRecordOperOperOutputReference | DataThunderGslbZoneDnsCaaRecordOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataThunderGslbZoneDnsCaaRecordOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbZoneDnsCaaRecordOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastServer = this._lastServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbZoneDnsCaaRecordOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lastServer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lastServer = value.lastServer;
    }
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_dns_caa_record_oper thunder_gslb_zone_dns_caa_record_oper}
*/
export class DataThunderGslbZoneDnsCaaRecordOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_dns_caa_record_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbZoneDnsCaaRecordOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbZoneDnsCaaRecordOper to import
  * @param importFromId The id of the existing DataThunderGslbZoneDnsCaaRecordOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_dns_caa_record_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbZoneDnsCaaRecordOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_dns_caa_record_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_zone_dns_caa_record_oper thunder_gslb_zone_dns_caa_record_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbZoneDnsCaaRecordOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbZoneDnsCaaRecordOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_dns_caa_record_oper',
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
    this._criticalFlag = config.criticalFlag;
    this._id = config.id;
    this._propertyTag = config.propertyTag;
    this._rdata = config.rdata;
    this._zoneName = config.zoneName;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // critical_flag - computed: false, optional: false, required: true
  private _criticalFlag?: number; 
  public get criticalFlag() {
    return this.getNumberAttribute('critical_flag');
  }
  public set criticalFlag(value: number) {
    this._criticalFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalFlagInput() {
    return this._criticalFlag;
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

  // property_tag - computed: false, optional: false, required: true
  private _propertyTag?: string; 
  public get propertyTag() {
    return this.getStringAttribute('property_tag');
  }
  public set propertyTag(value: string) {
    this._propertyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTagInput() {
    return this._propertyTag;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbZoneDnsCaaRecordOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbZoneDnsCaaRecordOperOper) {
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
      critical_flag: cdktf.numberToTerraform(this._criticalFlag),
      id: cdktf.stringToTerraform(this._id),
      property_tag: cdktf.stringToTerraform(this._propertyTag),
      rdata: cdktf.stringToTerraform(this._rdata),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      oper: dataThunderGslbZoneDnsCaaRecordOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      critical_flag: {
        value: cdktf.numberToHclTerraform(this._criticalFlag),
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
      property_tag: {
        value: cdktf.stringToHclTerraform(this._propertyTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdata: {
        value: cdktf.stringToHclTerraform(this._rdata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderGslbZoneDnsCaaRecordOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbZoneDnsCaaRecordOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
