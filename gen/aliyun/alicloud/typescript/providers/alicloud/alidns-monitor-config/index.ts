// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlidnsMonitorConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#addr_pool_id AlidnsMonitorConfig#addr_pool_id}
  */
  readonly addrPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#evaluation_count AlidnsMonitorConfig#evaluation_count}
  */
  readonly evaluationCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#id AlidnsMonitorConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#interval AlidnsMonitorConfig#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#lang AlidnsMonitorConfig#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#monitor_extend_info AlidnsMonitorConfig#monitor_extend_info}
  */
  readonly monitorExtendInfo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#protocol_type AlidnsMonitorConfig#protocol_type}
  */
  readonly protocolType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#timeout AlidnsMonitorConfig#timeout}
  */
  readonly timeout: number;
  /**
  * isp_city_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#isp_city_node AlidnsMonitorConfig#isp_city_node}
  */
  readonly ispCityNode: AlidnsMonitorConfigIspCityNode[] | cdktf.IResolvable;
}
export interface AlidnsMonitorConfigIspCityNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#city_code AlidnsMonitorConfig#city_code}
  */
  readonly cityCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#isp_code AlidnsMonitorConfig#isp_code}
  */
  readonly ispCode: string;
}

export function alidnsMonitorConfigIspCityNodeToTerraform(struct?: AlidnsMonitorConfigIspCityNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city_code: cdktf.stringToTerraform(struct!.cityCode),
    isp_code: cdktf.stringToTerraform(struct!.ispCode),
  }
}


export function alidnsMonitorConfigIspCityNodeToHclTerraform(struct?: AlidnsMonitorConfigIspCityNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city_code: {
      value: cdktf.stringToHclTerraform(struct!.cityCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isp_code: {
      value: cdktf.stringToHclTerraform(struct!.ispCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlidnsMonitorConfigIspCityNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlidnsMonitorConfigIspCityNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cityCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cityCode = this._cityCode;
    }
    if (this._ispCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ispCode = this._ispCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlidnsMonitorConfigIspCityNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cityCode = undefined;
      this._ispCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cityCode = value.cityCode;
      this._ispCode = value.ispCode;
    }
  }

  // city_code - computed: false, optional: false, required: true
  private _cityCode?: string; 
  public get cityCode() {
    return this.getStringAttribute('city_code');
  }
  public set cityCode(value: string) {
    this._cityCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityCodeInput() {
    return this._cityCode;
  }

  // isp_code - computed: false, optional: false, required: true
  private _ispCode?: string; 
  public get ispCode() {
    return this.getStringAttribute('isp_code');
  }
  public set ispCode(value: string) {
    this._ispCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ispCodeInput() {
    return this._ispCode;
  }
}

export class AlidnsMonitorConfigIspCityNodeList extends cdktf.ComplexList {
  public internalValue? : AlidnsMonitorConfigIspCityNode[] | cdktf.IResolvable

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
  public get(index: number): AlidnsMonitorConfigIspCityNodeOutputReference {
    return new AlidnsMonitorConfigIspCityNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config alicloud_alidns_monitor_config}
*/
export class AlidnsMonitorConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alidns_monitor_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlidnsMonitorConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlidnsMonitorConfig to import
  * @param importFromId The id of the existing AlidnsMonitorConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlidnsMonitorConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alidns_monitor_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alidns_monitor_config alicloud_alidns_monitor_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlidnsMonitorConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AlidnsMonitorConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alidns_monitor_config',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addrPoolId = config.addrPoolId;
    this._evaluationCount = config.evaluationCount;
    this._id = config.id;
    this._interval = config.interval;
    this._lang = config.lang;
    this._monitorExtendInfo = config.monitorExtendInfo;
    this._protocolType = config.protocolType;
    this._timeout = config.timeout;
    this._ispCityNode.internalValue = config.ispCityNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_pool_id - computed: false, optional: false, required: true
  private _addrPoolId?: string; 
  public get addrPoolId() {
    return this.getStringAttribute('addr_pool_id');
  }
  public set addrPoolId(value: string) {
    this._addrPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrPoolIdInput() {
    return this._addrPoolId;
  }

  // evaluation_count - computed: false, optional: false, required: true
  private _evaluationCount?: number; 
  public get evaluationCount() {
    return this.getNumberAttribute('evaluation_count');
  }
  public set evaluationCount(value: number) {
    this._evaluationCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationCountInput() {
    return this._evaluationCount;
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

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // monitor_extend_info - computed: false, optional: false, required: true
  private _monitorExtendInfo?: string; 
  public get monitorExtendInfo() {
    return this.getStringAttribute('monitor_extend_info');
  }
  public set monitorExtendInfo(value: string) {
    this._monitorExtendInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorExtendInfoInput() {
    return this._monitorExtendInfo;
  }

  // protocol_type - computed: false, optional: false, required: true
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // isp_city_node - computed: false, optional: false, required: true
  private _ispCityNode = new AlidnsMonitorConfigIspCityNodeList(this, "isp_city_node", true);
  public get ispCityNode() {
    return this._ispCityNode;
  }
  public putIspCityNode(value: AlidnsMonitorConfigIspCityNode[] | cdktf.IResolvable) {
    this._ispCityNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ispCityNodeInput() {
    return this._ispCityNode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_pool_id: cdktf.stringToTerraform(this._addrPoolId),
      evaluation_count: cdktf.numberToTerraform(this._evaluationCount),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      lang: cdktf.stringToTerraform(this._lang),
      monitor_extend_info: cdktf.stringToTerraform(this._monitorExtendInfo),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      timeout: cdktf.numberToTerraform(this._timeout),
      isp_city_node: cdktf.listMapper(alidnsMonitorConfigIspCityNodeToTerraform, true)(this._ispCityNode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_pool_id: {
        value: cdktf.stringToHclTerraform(this._addrPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaluation_count: {
        value: cdktf.numberToHclTerraform(this._evaluationCount),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_extend_info: {
        value: cdktf.stringToHclTerraform(this._monitorExtendInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_type: {
        value: cdktf.stringToHclTerraform(this._protocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isp_city_node: {
        value: cdktf.listMapperHcl(alidnsMonitorConfigIspCityNodeToHclTerraform, true)(this._ispCityNode.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlidnsMonitorConfigIspCityNodeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
