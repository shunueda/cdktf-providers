// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmsSiteMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor#address CmsSiteMonitor#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor#alert_ids CmsSiteMonitor#alert_ids}
  */
  readonly alertIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor#id CmsSiteMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor#interval CmsSiteMonitor#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor#options_json CmsSiteMonitor#options_json}
  */
  readonly optionsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor#task_name CmsSiteMonitor#task_name}
  */
  readonly taskName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor#task_type CmsSiteMonitor#task_type}
  */
  readonly taskType: string;
  /**
  * isp_cities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor#isp_cities CmsSiteMonitor#isp_cities}
  */
  readonly ispCities?: CmsSiteMonitorIspCities[] | cdktf.IResolvable;
}
export interface CmsSiteMonitorIspCities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor#city CmsSiteMonitor#city}
  */
  readonly city: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor#isp CmsSiteMonitor#isp}
  */
  readonly isp: string;
}

export function cmsSiteMonitorIspCitiesToTerraform(struct?: CmsSiteMonitorIspCities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    isp: cdktf.stringToTerraform(struct!.isp),
  }
}


export function cmsSiteMonitorIspCitiesToHclTerraform(struct?: CmsSiteMonitorIspCities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isp: {
      value: cdktf.stringToHclTerraform(struct!.isp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsSiteMonitorIspCitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsSiteMonitorIspCities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._isp !== undefined) {
      hasAnyValues = true;
      internalValueResult.isp = this._isp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsSiteMonitorIspCities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._city = undefined;
      this._isp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._city = value.city;
      this._isp = value.isp;
    }
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // isp - computed: false, optional: false, required: true
  private _isp?: string; 
  public get isp() {
    return this.getStringAttribute('isp');
  }
  public set isp(value: string) {
    this._isp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ispInput() {
    return this._isp;
  }
}

export class CmsSiteMonitorIspCitiesList extends cdktf.ComplexList {
  public internalValue? : CmsSiteMonitorIspCities[] | cdktf.IResolvable

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
  public get(index: number): CmsSiteMonitorIspCitiesOutputReference {
    return new CmsSiteMonitorIspCitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor alibabacloudstack_cms_site_monitor}
*/
export class CmsSiteMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cms_site_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmsSiteMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmsSiteMonitor to import
  * @param importFromId The id of the existing CmsSiteMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmsSiteMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cms_site_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/cms_site_monitor alibabacloudstack_cms_site_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmsSiteMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: CmsSiteMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cms_site_monitor',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
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
    this._alertIds = config.alertIds;
    this._id = config.id;
    this._interval = config.interval;
    this._optionsJson = config.optionsJson;
    this._taskName = config.taskName;
    this._taskType = config.taskType;
    this._ispCities.internalValue = config.ispCities;
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

  // alert_ids - computed: false, optional: true, required: false
  private _alertIds?: string[]; 
  public get alertIds() {
    return this.getListAttribute('alert_ids');
  }
  public set alertIds(value: string[]) {
    this._alertIds = value;
  }
  public resetAlertIds() {
    this._alertIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIdsInput() {
    return this._alertIds;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // options_json - computed: false, optional: true, required: false
  private _optionsJson?: string; 
  public get optionsJson() {
    return this.getStringAttribute('options_json');
  }
  public set optionsJson(value: string) {
    this._optionsJson = value;
  }
  public resetOptionsJson() {
    this._optionsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsJsonInput() {
    return this._optionsJson;
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // task_state - computed: true, optional: false, required: false
  public get taskState() {
    return this.getStringAttribute('task_state');
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // isp_cities - computed: false, optional: true, required: false
  private _ispCities = new CmsSiteMonitorIspCitiesList(this, "isp_cities", true);
  public get ispCities() {
    return this._ispCities;
  }
  public putIspCities(value: CmsSiteMonitorIspCities[] | cdktf.IResolvable) {
    this._ispCities.internalValue = value;
  }
  public resetIspCities() {
    this._ispCities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ispCitiesInput() {
    return this._ispCities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      alert_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertIds),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      options_json: cdktf.stringToTerraform(this._optionsJson),
      task_name: cdktf.stringToTerraform(this._taskName),
      task_type: cdktf.stringToTerraform(this._taskType),
      isp_cities: cdktf.listMapper(cmsSiteMonitorIspCitiesToTerraform, true)(this._ispCities.internalValue),
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
      alert_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      options_json: {
        value: cdktf.stringToHclTerraform(this._optionsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isp_cities: {
        value: cdktf.listMapperHcl(cmsSiteMonitorIspCitiesToHclTerraform, true)(this._ispCities.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CmsSiteMonitorIspCitiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
