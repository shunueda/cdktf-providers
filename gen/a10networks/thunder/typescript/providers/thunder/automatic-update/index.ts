// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomaticUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Change GLM source url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#glm_source_url AutomaticUpdate#glm_source_url}
  */
  readonly glmSourceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#id AutomaticUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Use management port to connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#use_mgmt_port AutomaticUpdate#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#uuid AutomaticUpdate#uuid}
  */
  readonly uuid?: string;
  /**
  * check_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#check_now AutomaticUpdate#check_now}
  */
  readonly checkNow?: AutomaticUpdateCheckNow;
  /**
  * checknow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#checknow AutomaticUpdate#checknow}
  */
  readonly checknow?: AutomaticUpdateChecknow;
  /**
  * config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#config_list AutomaticUpdate#config_list}
  */
  readonly configList?: AutomaticUpdateConfigListStruct[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#info AutomaticUpdate#info}
  */
  readonly info?: AutomaticUpdateInfo;
  /**
  * proxy_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#proxy_server AutomaticUpdate#proxy_server}
  */
  readonly proxyServer?: AutomaticUpdateProxyServer;
  /**
  * reset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#reset AutomaticUpdate#reset}
  */
  readonly reset?: AutomaticUpdateReset;
  /**
  * revert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#revert AutomaticUpdate#revert}
  */
  readonly revert?: AutomaticUpdateRevert;
}
export interface AutomaticUpdateCheckNow {
  /**
  * 'app-fw': Application Firewall; 'ca-bundle': CA Certificate Bundle; 'a10-threat-intel': A10 Threat intel class list; 'central-cert-pin-list': Central updated cert pinning list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#feature_name AutomaticUpdate#feature_name}
  */
  readonly featureName?: string;
  /**
  * Get files from GLM Staging storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#from_staging_server AutomaticUpdate#from_staging_server}
  */
  readonly fromStagingServer?: number;
  /**
  * update to this specific version, if this option is not configured, update to the latest version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#prod_ver AutomaticUpdate#prod_ver}
  */
  readonly prodVer?: string;
  /**
  * update this specific version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#stage_ver AutomaticUpdate#stage_ver}
  */
  readonly stageVer?: string;
}

export function automaticUpdateCheckNowToTerraform(struct?: AutomaticUpdateCheckNowOutputReference | AutomaticUpdateCheckNow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    from_staging_server: cdktf.numberToTerraform(struct!.fromStagingServer),
    prod_ver: cdktf.stringToTerraform(struct!.prodVer),
    stage_ver: cdktf.stringToTerraform(struct!.stageVer),
  }
}


export function automaticUpdateCheckNowToHclTerraform(struct?: AutomaticUpdateCheckNowOutputReference | AutomaticUpdateCheckNow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_name: {
      value: cdktf.stringToHclTerraform(struct!.featureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_staging_server: {
      value: cdktf.numberToHclTerraform(struct!.fromStagingServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prod_ver: {
      value: cdktf.stringToHclTerraform(struct!.prodVer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage_ver: {
      value: cdktf.stringToHclTerraform(struct!.stageVer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomaticUpdateCheckNowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomaticUpdateCheckNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureName = this._featureName;
    }
    if (this._fromStagingServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromStagingServer = this._fromStagingServer;
    }
    if (this._prodVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.prodVer = this._prodVer;
    }
    if (this._stageVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageVer = this._stageVer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomaticUpdateCheckNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._featureName = undefined;
      this._fromStagingServer = undefined;
      this._prodVer = undefined;
      this._stageVer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._featureName = value.featureName;
      this._fromStagingServer = value.fromStagingServer;
      this._prodVer = value.prodVer;
      this._stageVer = value.stageVer;
    }
  }

  // feature_name - computed: false, optional: true, required: false
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  public resetFeatureName() {
    this._featureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // from_staging_server - computed: false, optional: true, required: false
  private _fromStagingServer?: number; 
  public get fromStagingServer() {
    return this.getNumberAttribute('from_staging_server');
  }
  public set fromStagingServer(value: number) {
    this._fromStagingServer = value;
  }
  public resetFromStagingServer() {
    this._fromStagingServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromStagingServerInput() {
    return this._fromStagingServer;
  }

  // prod_ver - computed: false, optional: true, required: false
  private _prodVer?: string; 
  public get prodVer() {
    return this.getStringAttribute('prod_ver');
  }
  public set prodVer(value: string) {
    this._prodVer = value;
  }
  public resetProdVer() {
    this._prodVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prodVerInput() {
    return this._prodVer;
  }

  // stage_ver - computed: false, optional: true, required: false
  private _stageVer?: string; 
  public get stageVer() {
    return this.getStringAttribute('stage_ver');
  }
  public set stageVer(value: string) {
    this._stageVer = value;
  }
  public resetStageVer() {
    this._stageVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageVerInput() {
    return this._stageVer;
  }
}
export interface AutomaticUpdateChecknow {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#uuid AutomaticUpdate#uuid}
  */
  readonly uuid?: string;
}

export function automaticUpdateChecknowToTerraform(struct?: AutomaticUpdateChecknowOutputReference | AutomaticUpdateChecknow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function automaticUpdateChecknowToHclTerraform(struct?: AutomaticUpdateChecknowOutputReference | AutomaticUpdateChecknow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomaticUpdateChecknowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomaticUpdateChecknow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomaticUpdateChecknow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface AutomaticUpdateConfigListStruct {
  /**
  * Every day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#daily AutomaticUpdate#daily}
  */
  readonly daily?: number;
  /**
  * Time of day to update (hh:mm) in 24 hour local time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#day_time AutomaticUpdate#day_time}
  */
  readonly dayTime?: string;
  /**
  * Enable libcurl debug option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#debug AutomaticUpdate#debug}
  */
  readonly debug?: number;
  /**
  * Disable peer server certificate verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#disable_ssl_verify AutomaticUpdate#disable_ssl_verify}
  */
  readonly disableSslVerify?: number;
  /**
  * 'app-fw': Application Firewall Configuration; 'ca-bundle': CA Certificate Bundle; 'a10-threat-intel': A10 Threat intel class list; 'central-cert-pin-list': Central updated cert pinning list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#feature_name AutomaticUpdate#feature_name}
  */
  readonly featureName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#schedule AutomaticUpdate#schedule}
  */
  readonly schedule?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#uuid AutomaticUpdate#uuid}
  */
  readonly uuid?: string;
  /**
  * 'Monday': Monday; 'Tuesday': Tuesday; 'Wednesday': Wednesday; 'Thursday': Thursday; 'Friday': Friday; 'Saturday': Saturday; 'Sunday': Sunday;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#week_day AutomaticUpdate#week_day}
  */
  readonly weekDay?: string;
  /**
  * Time of day to update (hh:mm) in 24 hour local time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#week_time AutomaticUpdate#week_time}
  */
  readonly weekTime?: string;
  /**
  * Every week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#weekly AutomaticUpdate#weekly}
  */
  readonly weekly?: number;
}

export function automaticUpdateConfigListStructToTerraform(struct?: AutomaticUpdateConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: cdktf.numberToTerraform(struct!.daily),
    day_time: cdktf.stringToTerraform(struct!.dayTime),
    debug: cdktf.numberToTerraform(struct!.debug),
    disable_ssl_verify: cdktf.numberToTerraform(struct!.disableSslVerify),
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    schedule: cdktf.numberToTerraform(struct!.schedule),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    week_day: cdktf.stringToTerraform(struct!.weekDay),
    week_time: cdktf.stringToTerraform(struct!.weekTime),
    weekly: cdktf.numberToTerraform(struct!.weekly),
  }
}


export function automaticUpdateConfigListStructToHclTerraform(struct?: AutomaticUpdateConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: cdktf.numberToHclTerraform(struct!.daily),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_time: {
      value: cdktf.stringToHclTerraform(struct!.dayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug: {
      value: cdktf.numberToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_ssl_verify: {
      value: cdktf.numberToHclTerraform(struct!.disableSslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    feature_name: {
      value: cdktf.stringToHclTerraform(struct!.featureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.numberToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_day: {
      value: cdktf.stringToHclTerraform(struct!.weekDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_time: {
      value: cdktf.stringToHclTerraform(struct!.weekTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly: {
      value: cdktf.numberToHclTerraform(struct!.weekly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomaticUpdateConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutomaticUpdateConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily;
    }
    if (this._dayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayTime = this._dayTime;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._disableSslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSslVerify = this._disableSslVerify;
    }
    if (this._featureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureName = this._featureName;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weekDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDay = this._weekDay;
    }
    if (this._weekTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekTime = this._weekTime;
    }
    if (this._weekly !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomaticUpdateConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily = undefined;
      this._dayTime = undefined;
      this._debug = undefined;
      this._disableSslVerify = undefined;
      this._featureName = undefined;
      this._schedule = undefined;
      this._uuid = undefined;
      this._weekDay = undefined;
      this._weekTime = undefined;
      this._weekly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily = value.daily;
      this._dayTime = value.dayTime;
      this._debug = value.debug;
      this._disableSslVerify = value.disableSslVerify;
      this._featureName = value.featureName;
      this._schedule = value.schedule;
      this._uuid = value.uuid;
      this._weekDay = value.weekDay;
      this._weekTime = value.weekTime;
      this._weekly = value.weekly;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily?: number; 
  public get daily() {
    return this.getNumberAttribute('daily');
  }
  public set daily(value: number) {
    this._daily = value;
  }
  public resetDaily() {
    this._daily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily;
  }

  // day_time - computed: false, optional: true, required: false
  private _dayTime?: string; 
  public get dayTime() {
    return this.getStringAttribute('day_time');
  }
  public set dayTime(value: string) {
    this._dayTime = value;
  }
  public resetDayTime() {
    this._dayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayTimeInput() {
    return this._dayTime;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: number; 
  public get debug() {
    return this.getNumberAttribute('debug');
  }
  public set debug(value: number) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // disable_ssl_verify - computed: false, optional: true, required: false
  private _disableSslVerify?: number; 
  public get disableSslVerify() {
    return this.getNumberAttribute('disable_ssl_verify');
  }
  public set disableSslVerify(value: number) {
    this._disableSslVerify = value;
  }
  public resetDisableSslVerify() {
    this._disableSslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSslVerifyInput() {
    return this._disableSslVerify;
  }

  // feature_name - computed: false, optional: false, required: true
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: number; 
  public get schedule() {
    return this.getNumberAttribute('schedule');
  }
  public set schedule(value: number) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
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

  // week_day - computed: false, optional: true, required: false
  private _weekDay?: string; 
  public get weekDay() {
    return this.getStringAttribute('week_day');
  }
  public set weekDay(value: string) {
    this._weekDay = value;
  }
  public resetWeekDay() {
    this._weekDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayInput() {
    return this._weekDay;
  }

  // week_time - computed: false, optional: true, required: false
  private _weekTime?: string; 
  public get weekTime() {
    return this.getStringAttribute('week_time');
  }
  public set weekTime(value: string) {
    this._weekTime = value;
  }
  public resetWeekTime() {
    this._weekTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekTimeInput() {
    return this._weekTime;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly?: number; 
  public get weekly() {
    return this.getNumberAttribute('weekly');
  }
  public set weekly(value: number) {
    this._weekly = value;
  }
  public resetWeekly() {
    this._weekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly;
  }
}

export class AutomaticUpdateConfigListStructList extends cdktf.ComplexList {
  public internalValue? : AutomaticUpdateConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): AutomaticUpdateConfigListStructOutputReference {
    return new AutomaticUpdateConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomaticUpdateInfo {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#uuid AutomaticUpdate#uuid}
  */
  readonly uuid?: string;
}

export function automaticUpdateInfoToTerraform(struct?: AutomaticUpdateInfoOutputReference | AutomaticUpdateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function automaticUpdateInfoToHclTerraform(struct?: AutomaticUpdateInfoOutputReference | AutomaticUpdateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomaticUpdateInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomaticUpdateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomaticUpdateInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface AutomaticUpdateProxyServer {
  /**
  * 'ntlm': NTLM authentication(default); 'basic': Basic authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#auth_type AutomaticUpdate#auth_type}
  */
  readonly authType?: string;
  /**
  * Realm for NTLM authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#domain AutomaticUpdate#domain}
  */
  readonly domain?: string;
  /**
  * Proxy server HTTPs port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#https_port AutomaticUpdate#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Password for proxy authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#password AutomaticUpdate#password}
  */
  readonly password?: number;
  /**
  * Proxy server hostname or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#proxy_host AutomaticUpdate#proxy_host}
  */
  readonly proxyHost?: string;
  /**
  * password value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#secret_string AutomaticUpdate#secret_string}
  */
  readonly secretString?: string;
  /**
  * Username for proxy authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#username AutomaticUpdate#username}
  */
  readonly username?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#uuid AutomaticUpdate#uuid}
  */
  readonly uuid?: string;
}

export function automaticUpdateProxyServerToTerraform(struct?: AutomaticUpdateProxyServerOutputReference | AutomaticUpdateProxyServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    domain: cdktf.stringToTerraform(struct!.domain),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    password: cdktf.numberToTerraform(struct!.password),
    proxy_host: cdktf.stringToTerraform(struct!.proxyHost),
    secret_string: cdktf.stringToTerraform(struct!.secretString),
    username: cdktf.stringToTerraform(struct!.username),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function automaticUpdateProxyServerToHclTerraform(struct?: AutomaticUpdateProxyServerOutputReference | AutomaticUpdateProxyServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.numberToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.proxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_string: {
      value: cdktf.stringToHclTerraform(struct!.secretString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomaticUpdateProxyServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomaticUpdateProxyServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._proxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHost = this._proxyHost;
    }
    if (this._secretString !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretString = this._secretString;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomaticUpdateProxyServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._domain = undefined;
      this._httpsPort = undefined;
      this._password = undefined;
      this._proxyHost = undefined;
      this._secretString = undefined;
      this._username = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._domain = value.domain;
      this._httpsPort = value.httpsPort;
      this._password = value.password;
      this._proxyHost = value.proxyHost;
      this._secretString = value.secretString;
      this._username = value.username;
      this._uuid = value.uuid;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // password - computed: false, optional: true, required: false
  private _password?: number; 
  public get password() {
    return this.getNumberAttribute('password');
  }
  public set password(value: number) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // proxy_host - computed: false, optional: true, required: false
  private _proxyHost?: string; 
  public get proxyHost() {
    return this.getStringAttribute('proxy_host');
  }
  public set proxyHost(value: string) {
    this._proxyHost = value;
  }
  public resetProxyHost() {
    this._proxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHostInput() {
    return this._proxyHost;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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
}
export interface AutomaticUpdateReset {
  /**
  * 'app-fw': Application Firewall; 'ca-bundle': CA Certificate Bundle;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#feature_name AutomaticUpdate#feature_name}
  */
  readonly featureName?: string;
}

export function automaticUpdateResetToTerraform(struct?: AutomaticUpdateResetOutputReference | AutomaticUpdateReset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_name: cdktf.stringToTerraform(struct!.featureName),
  }
}


export function automaticUpdateResetToHclTerraform(struct?: AutomaticUpdateResetOutputReference | AutomaticUpdateReset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_name: {
      value: cdktf.stringToHclTerraform(struct!.featureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomaticUpdateResetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomaticUpdateReset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureName = this._featureName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomaticUpdateReset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._featureName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._featureName = value.featureName;
    }
  }

  // feature_name - computed: false, optional: true, required: false
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  public resetFeatureName() {
    this._featureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }
}
export interface AutomaticUpdateRevert {
  /**
  * 'app-fw': Application Firewall; 'a10-threat-intel': A10 Threat intel class list; 'central-cert-pin-list': Central updated cert pinning list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#feature_name AutomaticUpdate#feature_name}
  */
  readonly featureName?: string;
}

export function automaticUpdateRevertToTerraform(struct?: AutomaticUpdateRevertOutputReference | AutomaticUpdateRevert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_name: cdktf.stringToTerraform(struct!.featureName),
  }
}


export function automaticUpdateRevertToHclTerraform(struct?: AutomaticUpdateRevertOutputReference | AutomaticUpdateRevert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_name: {
      value: cdktf.stringToHclTerraform(struct!.featureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomaticUpdateRevertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomaticUpdateRevert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureName = this._featureName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomaticUpdateRevert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._featureName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._featureName = value.featureName;
    }
  }

  // feature_name - computed: false, optional: true, required: false
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  public resetFeatureName() {
    this._featureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update thunder_automatic_update}
*/
export class AutomaticUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_automatic_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomaticUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomaticUpdate to import
  * @param importFromId The id of the existing AutomaticUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomaticUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_automatic_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/automatic_update thunder_automatic_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomaticUpdateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AutomaticUpdateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_automatic_update',
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
    this._glmSourceUrl = config.glmSourceUrl;
    this._id = config.id;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
    this._checkNow.internalValue = config.checkNow;
    this._checknow.internalValue = config.checknow;
    this._configList.internalValue = config.configList;
    this._info.internalValue = config.info;
    this._proxyServer.internalValue = config.proxyServer;
    this._reset.internalValue = config.reset;
    this._revert.internalValue = config.revert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // glm_source_url - computed: false, optional: true, required: false
  private _glmSourceUrl?: string; 
  public get glmSourceUrl() {
    return this.getStringAttribute('glm_source_url');
  }
  public set glmSourceUrl(value: string) {
    this._glmSourceUrl = value;
  }
  public resetGlmSourceUrl() {
    this._glmSourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmSourceUrlInput() {
    return this._glmSourceUrl;
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

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
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

  // check_now - computed: false, optional: true, required: false
  private _checkNow = new AutomaticUpdateCheckNowOutputReference(this, "check_now");
  public get checkNow() {
    return this._checkNow;
  }
  public putCheckNow(value: AutomaticUpdateCheckNow) {
    this._checkNow.internalValue = value;
  }
  public resetCheckNow() {
    this._checkNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNowInput() {
    return this._checkNow.internalValue;
  }

  // checknow - computed: false, optional: true, required: false
  private _checknow = new AutomaticUpdateChecknowOutputReference(this, "checknow");
  public get checknow() {
    return this._checknow;
  }
  public putChecknow(value: AutomaticUpdateChecknow) {
    this._checknow.internalValue = value;
  }
  public resetChecknow() {
    this._checknow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checknowInput() {
    return this._checknow.internalValue;
  }

  // config_list - computed: false, optional: true, required: false
  private _configList = new AutomaticUpdateConfigListStructList(this, "config_list", false);
  public get configList() {
    return this._configList;
  }
  public putConfigList(value: AutomaticUpdateConfigListStruct[] | cdktf.IResolvable) {
    this._configList.internalValue = value;
  }
  public resetConfigList() {
    this._configList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configListInput() {
    return this._configList.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new AutomaticUpdateInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: AutomaticUpdateInfo) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // proxy_server - computed: false, optional: true, required: false
  private _proxyServer = new AutomaticUpdateProxyServerOutputReference(this, "proxy_server");
  public get proxyServer() {
    return this._proxyServer;
  }
  public putProxyServer(value: AutomaticUpdateProxyServer) {
    this._proxyServer.internalValue = value;
  }
  public resetProxyServer() {
    this._proxyServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServerInput() {
    return this._proxyServer.internalValue;
  }

  // reset - computed: false, optional: true, required: false
  private _reset = new AutomaticUpdateResetOutputReference(this, "reset");
  public get reset() {
    return this._reset;
  }
  public putReset(value: AutomaticUpdateReset) {
    this._reset.internalValue = value;
  }
  public resetReset() {
    this._reset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset.internalValue;
  }

  // revert - computed: false, optional: true, required: false
  private _revert = new AutomaticUpdateRevertOutputReference(this, "revert");
  public get revert() {
    return this._revert;
  }
  public putRevert(value: AutomaticUpdateRevert) {
    this._revert.internalValue = value;
  }
  public resetRevert() {
    this._revert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertInput() {
    return this._revert.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      glm_source_url: cdktf.stringToTerraform(this._glmSourceUrl),
      id: cdktf.stringToTerraform(this._id),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      check_now: automaticUpdateCheckNowToTerraform(this._checkNow.internalValue),
      checknow: automaticUpdateChecknowToTerraform(this._checknow.internalValue),
      config_list: cdktf.listMapper(automaticUpdateConfigListStructToTerraform, true)(this._configList.internalValue),
      info: automaticUpdateInfoToTerraform(this._info.internalValue),
      proxy_server: automaticUpdateProxyServerToTerraform(this._proxyServer.internalValue),
      reset: automaticUpdateResetToTerraform(this._reset.internalValue),
      revert: automaticUpdateRevertToTerraform(this._revert.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      glm_source_url: {
        value: cdktf.stringToHclTerraform(this._glmSourceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_now: {
        value: automaticUpdateCheckNowToHclTerraform(this._checkNow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomaticUpdateCheckNowList",
      },
      checknow: {
        value: automaticUpdateChecknowToHclTerraform(this._checknow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomaticUpdateChecknowList",
      },
      config_list: {
        value: cdktf.listMapperHcl(automaticUpdateConfigListStructToHclTerraform, true)(this._configList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomaticUpdateConfigListStructList",
      },
      info: {
        value: automaticUpdateInfoToHclTerraform(this._info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomaticUpdateInfoList",
      },
      proxy_server: {
        value: automaticUpdateProxyServerToHclTerraform(this._proxyServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomaticUpdateProxyServerList",
      },
      reset: {
        value: automaticUpdateResetToHclTerraform(this._reset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomaticUpdateResetList",
      },
      revert: {
        value: automaticUpdateRevertToHclTerraform(this._revert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomaticUpdateRevertList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
