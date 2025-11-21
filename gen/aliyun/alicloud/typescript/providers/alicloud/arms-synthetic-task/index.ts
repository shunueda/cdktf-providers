// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArmsSyntheticTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#frequency ArmsSyntheticTask#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#id ArmsSyntheticTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#monitor_category ArmsSyntheticTask#monitor_category}
  */
  readonly monitorCategory: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#resource_group_id ArmsSyntheticTask#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#status ArmsSyntheticTask#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#synthetic_task_name ArmsSyntheticTask#synthetic_task_name}
  */
  readonly syntheticTaskName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#tags ArmsSyntheticTask#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#task_type ArmsSyntheticTask#task_type}
  */
  readonly taskType: number;
  /**
  * available_assertions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#available_assertions ArmsSyntheticTask#available_assertions}
  */
  readonly availableAssertions?: ArmsSyntheticTaskAvailableAssertions[] | cdktf.IResolvable;
  /**
  * common_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#common_setting ArmsSyntheticTask#common_setting}
  */
  readonly commonSetting?: ArmsSyntheticTaskCommonSetting;
  /**
  * custom_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#custom_period ArmsSyntheticTask#custom_period}
  */
  readonly customPeriod?: ArmsSyntheticTaskCustomPeriod;
  /**
  * monitor_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#monitor_conf ArmsSyntheticTask#monitor_conf}
  */
  readonly monitorConf: ArmsSyntheticTaskMonitorConf;
  /**
  * monitors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#monitors ArmsSyntheticTask#monitors}
  */
  readonly monitors: ArmsSyntheticTaskMonitors[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#timeouts ArmsSyntheticTask#timeouts}
  */
  readonly timeouts?: ArmsSyntheticTaskTimeouts;
}
export interface ArmsSyntheticTaskAvailableAssertions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#expect ArmsSyntheticTask#expect}
  */
  readonly expect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#operator ArmsSyntheticTask#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#target ArmsSyntheticTask#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#type ArmsSyntheticTask#type}
  */
  readonly type: string;
}

export function armsSyntheticTaskAvailableAssertionsToTerraform(struct?: ArmsSyntheticTaskAvailableAssertions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expect: cdktf.stringToTerraform(struct!.expect),
    operator: cdktf.stringToTerraform(struct!.operator),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function armsSyntheticTaskAvailableAssertionsToHclTerraform(struct?: ArmsSyntheticTaskAvailableAssertions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expect: {
      value: cdktf.stringToHclTerraform(struct!.expect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskAvailableAssertionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArmsSyntheticTaskAvailableAssertions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expect !== undefined) {
      hasAnyValues = true;
      internalValueResult.expect = this._expect;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskAvailableAssertions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expect = undefined;
      this._operator = undefined;
      this._target = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expect = value.expect;
      this._operator = value.operator;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // expect - computed: false, optional: false, required: true
  private _expect?: string; 
  public get expect() {
    return this.getStringAttribute('expect');
  }
  public set expect(value: string) {
    this._expect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectInput() {
    return this._expect;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ArmsSyntheticTaskAvailableAssertionsList extends cdktf.ComplexList {
  public internalValue? : ArmsSyntheticTaskAvailableAssertions[] | cdktf.IResolvable

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
  public get(index: number): ArmsSyntheticTaskAvailableAssertionsOutputReference {
    return new ArmsSyntheticTaskAvailableAssertionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArmsSyntheticTaskCommonSettingCustomHostHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#domain ArmsSyntheticTask#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ip_type ArmsSyntheticTask#ip_type}
  */
  readonly ipType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ips ArmsSyntheticTask#ips}
  */
  readonly ips: string[];
}

export function armsSyntheticTaskCommonSettingCustomHostHostsToTerraform(struct?: ArmsSyntheticTaskCommonSettingCustomHostHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    ip_type: cdktf.numberToTerraform(struct!.ipType),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
  }
}


export function armsSyntheticTaskCommonSettingCustomHostHostsToHclTerraform(struct?: ArmsSyntheticTaskCommonSettingCustomHostHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_type: {
      value: cdktf.numberToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskCommonSettingCustomHostHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArmsSyntheticTaskCommonSettingCustomHostHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskCommonSettingCustomHostHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._ipType = undefined;
      this._ips = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._ipType = value.ipType;
      this._ips = value.ips;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // ip_type - computed: false, optional: false, required: true
  private _ipType?: number; 
  public get ipType() {
    return this.getNumberAttribute('ip_type');
  }
  public set ipType(value: number) {
    this._ipType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // ips - computed: false, optional: false, required: true
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }
}

export class ArmsSyntheticTaskCommonSettingCustomHostHostsList extends cdktf.ComplexList {
  public internalValue? : ArmsSyntheticTaskCommonSettingCustomHostHosts[] | cdktf.IResolvable

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
  public get(index: number): ArmsSyntheticTaskCommonSettingCustomHostHostsOutputReference {
    return new ArmsSyntheticTaskCommonSettingCustomHostHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArmsSyntheticTaskCommonSettingCustomHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#select_type ArmsSyntheticTask#select_type}
  */
  readonly selectType: number;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#hosts ArmsSyntheticTask#hosts}
  */
  readonly hosts: ArmsSyntheticTaskCommonSettingCustomHostHosts[] | cdktf.IResolvable;
}

export function armsSyntheticTaskCommonSettingCustomHostToTerraform(struct?: ArmsSyntheticTaskCommonSettingCustomHostOutputReference | ArmsSyntheticTaskCommonSettingCustomHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_type: cdktf.numberToTerraform(struct!.selectType),
    hosts: cdktf.listMapper(armsSyntheticTaskCommonSettingCustomHostHostsToTerraform, true)(struct!.hosts),
  }
}


export function armsSyntheticTaskCommonSettingCustomHostToHclTerraform(struct?: ArmsSyntheticTaskCommonSettingCustomHostOutputReference | ArmsSyntheticTaskCommonSettingCustomHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    select_type: {
      value: cdktf.numberToHclTerraform(struct!.selectType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hosts: {
      value: cdktf.listMapperHcl(armsSyntheticTaskCommonSettingCustomHostHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ArmsSyntheticTaskCommonSettingCustomHostHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskCommonSettingCustomHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskCommonSettingCustomHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectType = this._selectType;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskCommonSettingCustomHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectType = undefined;
      this._hosts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectType = value.selectType;
      this._hosts.internalValue = value.hosts;
    }
  }

  // select_type - computed: false, optional: false, required: true
  private _selectType?: number; 
  public get selectType() {
    return this.getNumberAttribute('select_type');
  }
  public set selectType(value: number) {
    this._selectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectTypeInput() {
    return this._selectType;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts = new ArmsSyntheticTaskCommonSettingCustomHostHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ArmsSyntheticTaskCommonSettingCustomHostHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }
}
export interface ArmsSyntheticTaskCommonSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ip_type ArmsSyntheticTask#ip_type}
  */
  readonly ipType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#is_open_trace ArmsSyntheticTask#is_open_trace}
  */
  readonly isOpenTrace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#monitor_samples ArmsSyntheticTask#monitor_samples}
  */
  readonly monitorSamples?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#trace_client_type ArmsSyntheticTask#trace_client_type}
  */
  readonly traceClientType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#xtrace_region ArmsSyntheticTask#xtrace_region}
  */
  readonly xtraceRegion?: string;
  /**
  * custom_host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#custom_host ArmsSyntheticTask#custom_host}
  */
  readonly customHost?: ArmsSyntheticTaskCommonSettingCustomHost;
}

export function armsSyntheticTaskCommonSettingToTerraform(struct?: ArmsSyntheticTaskCommonSettingOutputReference | ArmsSyntheticTaskCommonSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_type: cdktf.numberToTerraform(struct!.ipType),
    is_open_trace: cdktf.booleanToTerraform(struct!.isOpenTrace),
    monitor_samples: cdktf.numberToTerraform(struct!.monitorSamples),
    trace_client_type: cdktf.numberToTerraform(struct!.traceClientType),
    xtrace_region: cdktf.stringToTerraform(struct!.xtraceRegion),
    custom_host: armsSyntheticTaskCommonSettingCustomHostToTerraform(struct!.customHost),
  }
}


export function armsSyntheticTaskCommonSettingToHclTerraform(struct?: ArmsSyntheticTaskCommonSettingOutputReference | ArmsSyntheticTaskCommonSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_type: {
      value: cdktf.numberToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_open_trace: {
      value: cdktf.booleanToHclTerraform(struct!.isOpenTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_samples: {
      value: cdktf.numberToHclTerraform(struct!.monitorSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trace_client_type: {
      value: cdktf.numberToHclTerraform(struct!.traceClientType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xtrace_region: {
      value: cdktf.stringToHclTerraform(struct!.xtraceRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_host: {
      value: armsSyntheticTaskCommonSettingCustomHostToHclTerraform(struct!.customHost),
      isBlock: true,
      type: "list",
      storageClassType: "ArmsSyntheticTaskCommonSettingCustomHostList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskCommonSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskCommonSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    if (this._isOpenTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOpenTrace = this._isOpenTrace;
    }
    if (this._monitorSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorSamples = this._monitorSamples;
    }
    if (this._traceClientType !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceClientType = this._traceClientType;
    }
    if (this._xtraceRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.xtraceRegion = this._xtraceRegion;
    }
    if (this._customHost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHost = this._customHost?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskCommonSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipType = undefined;
      this._isOpenTrace = undefined;
      this._monitorSamples = undefined;
      this._traceClientType = undefined;
      this._xtraceRegion = undefined;
      this._customHost.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipType = value.ipType;
      this._isOpenTrace = value.isOpenTrace;
      this._monitorSamples = value.monitorSamples;
      this._traceClientType = value.traceClientType;
      this._xtraceRegion = value.xtraceRegion;
      this._customHost.internalValue = value.customHost;
    }
  }

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: number; 
  public get ipType() {
    return this.getNumberAttribute('ip_type');
  }
  public set ipType(value: number) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // is_open_trace - computed: false, optional: true, required: false
  private _isOpenTrace?: boolean | cdktf.IResolvable; 
  public get isOpenTrace() {
    return this.getBooleanAttribute('is_open_trace');
  }
  public set isOpenTrace(value: boolean | cdktf.IResolvable) {
    this._isOpenTrace = value;
  }
  public resetIsOpenTrace() {
    this._isOpenTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOpenTraceInput() {
    return this._isOpenTrace;
  }

  // monitor_samples - computed: false, optional: true, required: false
  private _monitorSamples?: number; 
  public get monitorSamples() {
    return this.getNumberAttribute('monitor_samples');
  }
  public set monitorSamples(value: number) {
    this._monitorSamples = value;
  }
  public resetMonitorSamples() {
    this._monitorSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorSamplesInput() {
    return this._monitorSamples;
  }

  // trace_client_type - computed: false, optional: true, required: false
  private _traceClientType?: number; 
  public get traceClientType() {
    return this.getNumberAttribute('trace_client_type');
  }
  public set traceClientType(value: number) {
    this._traceClientType = value;
  }
  public resetTraceClientType() {
    this._traceClientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceClientTypeInput() {
    return this._traceClientType;
  }

  // xtrace_region - computed: false, optional: true, required: false
  private _xtraceRegion?: string; 
  public get xtraceRegion() {
    return this.getStringAttribute('xtrace_region');
  }
  public set xtraceRegion(value: string) {
    this._xtraceRegion = value;
  }
  public resetXtraceRegion() {
    this._xtraceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xtraceRegionInput() {
    return this._xtraceRegion;
  }

  // custom_host - computed: false, optional: true, required: false
  private _customHost = new ArmsSyntheticTaskCommonSettingCustomHostOutputReference(this, "custom_host");
  public get customHost() {
    return this._customHost;
  }
  public putCustomHost(value: ArmsSyntheticTaskCommonSettingCustomHost) {
    this._customHost.internalValue = value;
  }
  public resetCustomHost() {
    this._customHost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostInput() {
    return this._customHost.internalValue;
  }
}
export interface ArmsSyntheticTaskCustomPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#end_hour ArmsSyntheticTask#end_hour}
  */
  readonly endHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#start_hour ArmsSyntheticTask#start_hour}
  */
  readonly startHour?: number;
}

export function armsSyntheticTaskCustomPeriodToTerraform(struct?: ArmsSyntheticTaskCustomPeriodOutputReference | ArmsSyntheticTaskCustomPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_hour: cdktf.numberToTerraform(struct!.endHour),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
  }
}


export function armsSyntheticTaskCustomPeriodToHclTerraform(struct?: ArmsSyntheticTaskCustomPeriodOutputReference | ArmsSyntheticTaskCustomPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_hour: {
      value: cdktf.numberToHclTerraform(struct!.endHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskCustomPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskCustomPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHour = this._endHour;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskCustomPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endHour = undefined;
      this._startHour = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endHour = value.endHour;
      this._startHour = value.startHour;
    }
  }

  // end_hour - computed: false, optional: true, required: false
  private _endHour?: number; 
  public get endHour() {
    return this.getNumberAttribute('end_hour');
  }
  public set endHour(value: number) {
    this._endHour = value;
  }
  public resetEndHour() {
    this._endHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourInput() {
    return this._endHour;
  }

  // start_hour - computed: false, optional: true, required: false
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  public resetStartHour() {
    this._startHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }
}
export interface ArmsSyntheticTaskMonitorConfApiHttpRequestBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#content ArmsSyntheticTask#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#type ArmsSyntheticTask#type}
  */
  readonly type?: string;
}

export function armsSyntheticTaskMonitorConfApiHttpRequestBodyToTerraform(struct?: ArmsSyntheticTaskMonitorConfApiHttpRequestBodyOutputReference | ArmsSyntheticTaskMonitorConfApiHttpRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function armsSyntheticTaskMonitorConfApiHttpRequestBodyToHclTerraform(struct?: ArmsSyntheticTaskMonitorConfApiHttpRequestBodyOutputReference | ArmsSyntheticTaskMonitorConfApiHttpRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskMonitorConfApiHttpRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskMonitorConfApiHttpRequestBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskMonitorConfApiHttpRequestBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._type = value.type;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ArmsSyntheticTaskMonitorConfApiHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#connect_timeout ArmsSyntheticTask#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#method ArmsSyntheticTask#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#request_headers ArmsSyntheticTask#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#target_url ArmsSyntheticTask#target_url}
  */
  readonly targetUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#timeout ArmsSyntheticTask#timeout}
  */
  readonly timeout?: number;
  /**
  * request_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#request_body ArmsSyntheticTask#request_body}
  */
  readonly requestBody?: ArmsSyntheticTaskMonitorConfApiHttpRequestBody;
}

export function armsSyntheticTaskMonitorConfApiHttpToTerraform(struct?: ArmsSyntheticTaskMonitorConfApiHttpOutputReference | ArmsSyntheticTaskMonitorConfApiHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    method: cdktf.stringToTerraform(struct!.method),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    request_body: armsSyntheticTaskMonitorConfApiHttpRequestBodyToTerraform(struct!.requestBody),
  }
}


export function armsSyntheticTaskMonitorConfApiHttpToHclTerraform(struct?: ArmsSyntheticTaskMonitorConfApiHttpOutputReference | ArmsSyntheticTaskMonitorConfApiHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_body: {
      value: armsSyntheticTaskMonitorConfApiHttpRequestBodyToHclTerraform(struct!.requestBody),
      isBlock: true,
      type: "list",
      storageClassType: "ArmsSyntheticTaskMonitorConfApiHttpRequestBodyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskMonitorConfApiHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskMonitorConfApiHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._requestBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskMonitorConfApiHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectTimeout = undefined;
      this._method = undefined;
      this._requestHeaders = undefined;
      this._targetUrl = undefined;
      this._timeout = undefined;
      this._requestBody.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectTimeout = value.connectTimeout;
      this._method = value.method;
      this._requestHeaders = value.requestHeaders;
      this._targetUrl = value.targetUrl;
      this._timeout = value.timeout;
      this._requestBody.internalValue = value.requestBody;
    }
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // target_url - computed: false, optional: false, required: true
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody = new ArmsSyntheticTaskMonitorConfApiHttpRequestBodyOutputReference(this, "request_body");
  public get requestBody() {
    return this._requestBody;
  }
  public putRequestBody(value: ArmsSyntheticTaskMonitorConfApiHttpRequestBody) {
    this._requestBody.internalValue = value;
  }
  public resetRequestBody() {
    this._requestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody.internalValue;
  }
}
export interface ArmsSyntheticTaskMonitorConfFileDownload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#connection_timeout ArmsSyntheticTask#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#custom_header_content ArmsSyntheticTask#custom_header_content}
  */
  readonly customHeaderContent?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#download_kernel ArmsSyntheticTask#download_kernel}
  */
  readonly downloadKernel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ignore_certificate_auth_error ArmsSyntheticTask#ignore_certificate_auth_error}
  */
  readonly ignoreCertificateAuthError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ignore_certificate_canceled_error ArmsSyntheticTask#ignore_certificate_canceled_error}
  */
  readonly ignoreCertificateCanceledError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ignore_certificate_out_of_date_error ArmsSyntheticTask#ignore_certificate_out_of_date_error}
  */
  readonly ignoreCertificateOutOfDateError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ignore_certificate_status_error ArmsSyntheticTask#ignore_certificate_status_error}
  */
  readonly ignoreCertificateStatusError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ignore_certificate_untrustworthy_error ArmsSyntheticTask#ignore_certificate_untrustworthy_error}
  */
  readonly ignoreCertificateUntrustworthyError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ignore_certificate_using_error ArmsSyntheticTask#ignore_certificate_using_error}
  */
  readonly ignoreCertificateUsingError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ignore_invalid_host_error ArmsSyntheticTask#ignore_invalid_host_error}
  */
  readonly ignoreInvalidHostError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#monitor_timeout ArmsSyntheticTask#monitor_timeout}
  */
  readonly monitorTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#quick_protocol ArmsSyntheticTask#quick_protocol}
  */
  readonly quickProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#redirection ArmsSyntheticTask#redirection}
  */
  readonly redirection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#target_url ArmsSyntheticTask#target_url}
  */
  readonly targetUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#transmission_size ArmsSyntheticTask#transmission_size}
  */
  readonly transmissionSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#validate_keywords ArmsSyntheticTask#validate_keywords}
  */
  readonly validateKeywords?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#verify_way ArmsSyntheticTask#verify_way}
  */
  readonly verifyWay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#white_list ArmsSyntheticTask#white_list}
  */
  readonly whiteList?: string;
}

export function armsSyntheticTaskMonitorConfFileDownloadToTerraform(struct?: ArmsSyntheticTaskMonitorConfFileDownloadOutputReference | ArmsSyntheticTaskMonitorConfFileDownload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    custom_header_content: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customHeaderContent),
    download_kernel: cdktf.numberToTerraform(struct!.downloadKernel),
    ignore_certificate_auth_error: cdktf.numberToTerraform(struct!.ignoreCertificateAuthError),
    ignore_certificate_canceled_error: cdktf.numberToTerraform(struct!.ignoreCertificateCanceledError),
    ignore_certificate_out_of_date_error: cdktf.numberToTerraform(struct!.ignoreCertificateOutOfDateError),
    ignore_certificate_status_error: cdktf.numberToTerraform(struct!.ignoreCertificateStatusError),
    ignore_certificate_untrustworthy_error: cdktf.numberToTerraform(struct!.ignoreCertificateUntrustworthyError),
    ignore_certificate_using_error: cdktf.numberToTerraform(struct!.ignoreCertificateUsingError),
    ignore_invalid_host_error: cdktf.numberToTerraform(struct!.ignoreInvalidHostError),
    monitor_timeout: cdktf.numberToTerraform(struct!.monitorTimeout),
    quick_protocol: cdktf.numberToTerraform(struct!.quickProtocol),
    redirection: cdktf.numberToTerraform(struct!.redirection),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
    transmission_size: cdktf.numberToTerraform(struct!.transmissionSize),
    validate_keywords: cdktf.stringToTerraform(struct!.validateKeywords),
    verify_way: cdktf.numberToTerraform(struct!.verifyWay),
    white_list: cdktf.stringToTerraform(struct!.whiteList),
  }
}


export function armsSyntheticTaskMonitorConfFileDownloadToHclTerraform(struct?: ArmsSyntheticTaskMonitorConfFileDownloadOutputReference | ArmsSyntheticTaskMonitorConfFileDownload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_header_content: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customHeaderContent),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    download_kernel: {
      value: cdktf.numberToHclTerraform(struct!.downloadKernel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_certificate_auth_error: {
      value: cdktf.numberToHclTerraform(struct!.ignoreCertificateAuthError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_certificate_canceled_error: {
      value: cdktf.numberToHclTerraform(struct!.ignoreCertificateCanceledError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_certificate_out_of_date_error: {
      value: cdktf.numberToHclTerraform(struct!.ignoreCertificateOutOfDateError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_certificate_status_error: {
      value: cdktf.numberToHclTerraform(struct!.ignoreCertificateStatusError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_certificate_untrustworthy_error: {
      value: cdktf.numberToHclTerraform(struct!.ignoreCertificateUntrustworthyError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_certificate_using_error: {
      value: cdktf.numberToHclTerraform(struct!.ignoreCertificateUsingError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_invalid_host_error: {
      value: cdktf.numberToHclTerraform(struct!.ignoreInvalidHostError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_timeout: {
      value: cdktf.numberToHclTerraform(struct!.monitorTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quick_protocol: {
      value: cdktf.numberToHclTerraform(struct!.quickProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirection: {
      value: cdktf.numberToHclTerraform(struct!.redirection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmission_size: {
      value: cdktf.numberToHclTerraform(struct!.transmissionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    validate_keywords: {
      value: cdktf.stringToHclTerraform(struct!.validateKeywords),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_way: {
      value: cdktf.numberToHclTerraform(struct!.verifyWay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    white_list: {
      value: cdktf.stringToHclTerraform(struct!.whiteList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskMonitorConfFileDownloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskMonitorConfFileDownload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._customHeaderContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderContent = this._customHeaderContent;
    }
    if (this._downloadKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadKernel = this._downloadKernel;
    }
    if (this._ignoreCertificateAuthError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCertificateAuthError = this._ignoreCertificateAuthError;
    }
    if (this._ignoreCertificateCanceledError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCertificateCanceledError = this._ignoreCertificateCanceledError;
    }
    if (this._ignoreCertificateOutOfDateError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCertificateOutOfDateError = this._ignoreCertificateOutOfDateError;
    }
    if (this._ignoreCertificateStatusError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCertificateStatusError = this._ignoreCertificateStatusError;
    }
    if (this._ignoreCertificateUntrustworthyError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCertificateUntrustworthyError = this._ignoreCertificateUntrustworthyError;
    }
    if (this._ignoreCertificateUsingError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCertificateUsingError = this._ignoreCertificateUsingError;
    }
    if (this._ignoreInvalidHostError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreInvalidHostError = this._ignoreInvalidHostError;
    }
    if (this._monitorTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorTimeout = this._monitorTimeout;
    }
    if (this._quickProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickProtocol = this._quickProtocol;
    }
    if (this._redirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirection = this._redirection;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    if (this._transmissionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmissionSize = this._transmissionSize;
    }
    if (this._validateKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateKeywords = this._validateKeywords;
    }
    if (this._verifyWay !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyWay = this._verifyWay;
    }
    if (this._whiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteList = this._whiteList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskMonitorConfFileDownload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionTimeout = undefined;
      this._customHeaderContent = undefined;
      this._downloadKernel = undefined;
      this._ignoreCertificateAuthError = undefined;
      this._ignoreCertificateCanceledError = undefined;
      this._ignoreCertificateOutOfDateError = undefined;
      this._ignoreCertificateStatusError = undefined;
      this._ignoreCertificateUntrustworthyError = undefined;
      this._ignoreCertificateUsingError = undefined;
      this._ignoreInvalidHostError = undefined;
      this._monitorTimeout = undefined;
      this._quickProtocol = undefined;
      this._redirection = undefined;
      this._targetUrl = undefined;
      this._transmissionSize = undefined;
      this._validateKeywords = undefined;
      this._verifyWay = undefined;
      this._whiteList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionTimeout = value.connectionTimeout;
      this._customHeaderContent = value.customHeaderContent;
      this._downloadKernel = value.downloadKernel;
      this._ignoreCertificateAuthError = value.ignoreCertificateAuthError;
      this._ignoreCertificateCanceledError = value.ignoreCertificateCanceledError;
      this._ignoreCertificateOutOfDateError = value.ignoreCertificateOutOfDateError;
      this._ignoreCertificateStatusError = value.ignoreCertificateStatusError;
      this._ignoreCertificateUntrustworthyError = value.ignoreCertificateUntrustworthyError;
      this._ignoreCertificateUsingError = value.ignoreCertificateUsingError;
      this._ignoreInvalidHostError = value.ignoreInvalidHostError;
      this._monitorTimeout = value.monitorTimeout;
      this._quickProtocol = value.quickProtocol;
      this._redirection = value.redirection;
      this._targetUrl = value.targetUrl;
      this._transmissionSize = value.transmissionSize;
      this._validateKeywords = value.validateKeywords;
      this._verifyWay = value.verifyWay;
      this._whiteList = value.whiteList;
    }
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // custom_header_content - computed: false, optional: true, required: false
  private _customHeaderContent?: { [key: string]: string }; 
  public get customHeaderContent() {
    return this.getStringMapAttribute('custom_header_content');
  }
  public set customHeaderContent(value: { [key: string]: string }) {
    this._customHeaderContent = value;
  }
  public resetCustomHeaderContent() {
    this._customHeaderContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderContentInput() {
    return this._customHeaderContent;
  }

  // download_kernel - computed: false, optional: true, required: false
  private _downloadKernel?: number; 
  public get downloadKernel() {
    return this.getNumberAttribute('download_kernel');
  }
  public set downloadKernel(value: number) {
    this._downloadKernel = value;
  }
  public resetDownloadKernel() {
    this._downloadKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadKernelInput() {
    return this._downloadKernel;
  }

  // ignore_certificate_auth_error - computed: false, optional: true, required: false
  private _ignoreCertificateAuthError?: number; 
  public get ignoreCertificateAuthError() {
    return this.getNumberAttribute('ignore_certificate_auth_error');
  }
  public set ignoreCertificateAuthError(value: number) {
    this._ignoreCertificateAuthError = value;
  }
  public resetIgnoreCertificateAuthError() {
    this._ignoreCertificateAuthError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateAuthErrorInput() {
    return this._ignoreCertificateAuthError;
  }

  // ignore_certificate_canceled_error - computed: false, optional: true, required: false
  private _ignoreCertificateCanceledError?: number; 
  public get ignoreCertificateCanceledError() {
    return this.getNumberAttribute('ignore_certificate_canceled_error');
  }
  public set ignoreCertificateCanceledError(value: number) {
    this._ignoreCertificateCanceledError = value;
  }
  public resetIgnoreCertificateCanceledError() {
    this._ignoreCertificateCanceledError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateCanceledErrorInput() {
    return this._ignoreCertificateCanceledError;
  }

  // ignore_certificate_out_of_date_error - computed: false, optional: true, required: false
  private _ignoreCertificateOutOfDateError?: number; 
  public get ignoreCertificateOutOfDateError() {
    return this.getNumberAttribute('ignore_certificate_out_of_date_error');
  }
  public set ignoreCertificateOutOfDateError(value: number) {
    this._ignoreCertificateOutOfDateError = value;
  }
  public resetIgnoreCertificateOutOfDateError() {
    this._ignoreCertificateOutOfDateError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateOutOfDateErrorInput() {
    return this._ignoreCertificateOutOfDateError;
  }

  // ignore_certificate_status_error - computed: false, optional: true, required: false
  private _ignoreCertificateStatusError?: number; 
  public get ignoreCertificateStatusError() {
    return this.getNumberAttribute('ignore_certificate_status_error');
  }
  public set ignoreCertificateStatusError(value: number) {
    this._ignoreCertificateStatusError = value;
  }
  public resetIgnoreCertificateStatusError() {
    this._ignoreCertificateStatusError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateStatusErrorInput() {
    return this._ignoreCertificateStatusError;
  }

  // ignore_certificate_untrustworthy_error - computed: false, optional: true, required: false
  private _ignoreCertificateUntrustworthyError?: number; 
  public get ignoreCertificateUntrustworthyError() {
    return this.getNumberAttribute('ignore_certificate_untrustworthy_error');
  }
  public set ignoreCertificateUntrustworthyError(value: number) {
    this._ignoreCertificateUntrustworthyError = value;
  }
  public resetIgnoreCertificateUntrustworthyError() {
    this._ignoreCertificateUntrustworthyError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateUntrustworthyErrorInput() {
    return this._ignoreCertificateUntrustworthyError;
  }

  // ignore_certificate_using_error - computed: false, optional: true, required: false
  private _ignoreCertificateUsingError?: number; 
  public get ignoreCertificateUsingError() {
    return this.getNumberAttribute('ignore_certificate_using_error');
  }
  public set ignoreCertificateUsingError(value: number) {
    this._ignoreCertificateUsingError = value;
  }
  public resetIgnoreCertificateUsingError() {
    this._ignoreCertificateUsingError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateUsingErrorInput() {
    return this._ignoreCertificateUsingError;
  }

  // ignore_invalid_host_error - computed: false, optional: true, required: false
  private _ignoreInvalidHostError?: number; 
  public get ignoreInvalidHostError() {
    return this.getNumberAttribute('ignore_invalid_host_error');
  }
  public set ignoreInvalidHostError(value: number) {
    this._ignoreInvalidHostError = value;
  }
  public resetIgnoreInvalidHostError() {
    this._ignoreInvalidHostError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInvalidHostErrorInput() {
    return this._ignoreInvalidHostError;
  }

  // monitor_timeout - computed: false, optional: true, required: false
  private _monitorTimeout?: number; 
  public get monitorTimeout() {
    return this.getNumberAttribute('monitor_timeout');
  }
  public set monitorTimeout(value: number) {
    this._monitorTimeout = value;
  }
  public resetMonitorTimeout() {
    this._monitorTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTimeoutInput() {
    return this._monitorTimeout;
  }

  // quick_protocol - computed: false, optional: true, required: false
  private _quickProtocol?: number; 
  public get quickProtocol() {
    return this.getNumberAttribute('quick_protocol');
  }
  public set quickProtocol(value: number) {
    this._quickProtocol = value;
  }
  public resetQuickProtocol() {
    this._quickProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickProtocolInput() {
    return this._quickProtocol;
  }

  // redirection - computed: false, optional: true, required: false
  private _redirection?: number; 
  public get redirection() {
    return this.getNumberAttribute('redirection');
  }
  public set redirection(value: number) {
    this._redirection = value;
  }
  public resetRedirection() {
    this._redirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectionInput() {
    return this._redirection;
  }

  // target_url - computed: false, optional: false, required: true
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }

  // transmission_size - computed: false, optional: true, required: false
  private _transmissionSize?: number; 
  public get transmissionSize() {
    return this.getNumberAttribute('transmission_size');
  }
  public set transmissionSize(value: number) {
    this._transmissionSize = value;
  }
  public resetTransmissionSize() {
    this._transmissionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmissionSizeInput() {
    return this._transmissionSize;
  }

  // validate_keywords - computed: false, optional: true, required: false
  private _validateKeywords?: string; 
  public get validateKeywords() {
    return this.getStringAttribute('validate_keywords');
  }
  public set validateKeywords(value: string) {
    this._validateKeywords = value;
  }
  public resetValidateKeywords() {
    this._validateKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateKeywordsInput() {
    return this._validateKeywords;
  }

  // verify_way - computed: false, optional: true, required: false
  private _verifyWay?: number; 
  public get verifyWay() {
    return this.getNumberAttribute('verify_way');
  }
  public set verifyWay(value: number) {
    this._verifyWay = value;
  }
  public resetVerifyWay() {
    this._verifyWay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyWayInput() {
    return this._verifyWay;
  }

  // white_list - computed: false, optional: true, required: false
  private _whiteList?: string; 
  public get whiteList() {
    return this.getStringAttribute('white_list');
  }
  public set whiteList(value: string) {
    this._whiteList = value;
  }
  public resetWhiteList() {
    this._whiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListInput() {
    return this._whiteList;
  }
}
export interface ArmsSyntheticTaskMonitorConfNetDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#dns_server_ip_type ArmsSyntheticTask#dns_server_ip_type}
  */
  readonly dnsServerIpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ns_server ArmsSyntheticTask#ns_server}
  */
  readonly nsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#query_method ArmsSyntheticTask#query_method}
  */
  readonly queryMethod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#target_url ArmsSyntheticTask#target_url}
  */
  readonly targetUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#timeout ArmsSyntheticTask#timeout}
  */
  readonly timeout?: number;
}

export function armsSyntheticTaskMonitorConfNetDnsToTerraform(struct?: ArmsSyntheticTaskMonitorConfNetDnsOutputReference | ArmsSyntheticTaskMonitorConfNetDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server_ip_type: cdktf.numberToTerraform(struct!.dnsServerIpType),
    ns_server: cdktf.stringToTerraform(struct!.nsServer),
    query_method: cdktf.numberToTerraform(struct!.queryMethod),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function armsSyntheticTaskMonitorConfNetDnsToHclTerraform(struct?: ArmsSyntheticTaskMonitorConfNetDnsOutputReference | ArmsSyntheticTaskMonitorConfNetDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_server_ip_type: {
      value: cdktf.numberToHclTerraform(struct!.dnsServerIpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ns_server: {
      value: cdktf.stringToHclTerraform(struct!.nsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_method: {
      value: cdktf.numberToHclTerraform(struct!.queryMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskMonitorConfNetDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskMonitorConfNetDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServerIpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerIpType = this._dnsServerIpType;
    }
    if (this._nsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsServer = this._nsServer;
    }
    if (this._queryMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryMethod = this._queryMethod;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskMonitorConfNetDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServerIpType = undefined;
      this._nsServer = undefined;
      this._queryMethod = undefined;
      this._targetUrl = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServerIpType = value.dnsServerIpType;
      this._nsServer = value.nsServer;
      this._queryMethod = value.queryMethod;
      this._targetUrl = value.targetUrl;
      this._timeout = value.timeout;
    }
  }

  // dns_server_ip_type - computed: false, optional: true, required: false
  private _dnsServerIpType?: number; 
  public get dnsServerIpType() {
    return this.getNumberAttribute('dns_server_ip_type');
  }
  public set dnsServerIpType(value: number) {
    this._dnsServerIpType = value;
  }
  public resetDnsServerIpType() {
    this._dnsServerIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpTypeInput() {
    return this._dnsServerIpType;
  }

  // ns_server - computed: false, optional: true, required: false
  private _nsServer?: string; 
  public get nsServer() {
    return this.getStringAttribute('ns_server');
  }
  public set nsServer(value: string) {
    this._nsServer = value;
  }
  public resetNsServer() {
    this._nsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsServerInput() {
    return this._nsServer;
  }

  // query_method - computed: false, optional: true, required: false
  private _queryMethod?: number; 
  public get queryMethod() {
    return this.getNumberAttribute('query_method');
  }
  public set queryMethod(value: number) {
    this._queryMethod = value;
  }
  public resetQueryMethod() {
    this._queryMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryMethodInput() {
    return this._queryMethod;
  }

  // target_url - computed: false, optional: false, required: true
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ArmsSyntheticTaskMonitorConfNetIcmp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#interval ArmsSyntheticTask#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#package_num ArmsSyntheticTask#package_num}
  */
  readonly packageNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#package_size ArmsSyntheticTask#package_size}
  */
  readonly packageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#split_package ArmsSyntheticTask#split_package}
  */
  readonly splitPackage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#target_url ArmsSyntheticTask#target_url}
  */
  readonly targetUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#timeout ArmsSyntheticTask#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#tracert_enable ArmsSyntheticTask#tracert_enable}
  */
  readonly tracertEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#tracert_num_max ArmsSyntheticTask#tracert_num_max}
  */
  readonly tracertNumMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#tracert_timeout ArmsSyntheticTask#tracert_timeout}
  */
  readonly tracertTimeout?: number;
}

export function armsSyntheticTaskMonitorConfNetIcmpToTerraform(struct?: ArmsSyntheticTaskMonitorConfNetIcmpOutputReference | ArmsSyntheticTaskMonitorConfNetIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    package_num: cdktf.numberToTerraform(struct!.packageNum),
    package_size: cdktf.numberToTerraform(struct!.packageSize),
    split_package: cdktf.booleanToTerraform(struct!.splitPackage),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tracert_enable: cdktf.booleanToTerraform(struct!.tracertEnable),
    tracert_num_max: cdktf.numberToTerraform(struct!.tracertNumMax),
    tracert_timeout: cdktf.numberToTerraform(struct!.tracertTimeout),
  }
}


export function armsSyntheticTaskMonitorConfNetIcmpToHclTerraform(struct?: ArmsSyntheticTaskMonitorConfNetIcmpOutputReference | ArmsSyntheticTaskMonitorConfNetIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    package_num: {
      value: cdktf.numberToHclTerraform(struct!.packageNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    package_size: {
      value: cdktf.numberToHclTerraform(struct!.packageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_package: {
      value: cdktf.booleanToHclTerraform(struct!.splitPackage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracert_enable: {
      value: cdktf.booleanToHclTerraform(struct!.tracertEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracert_num_max: {
      value: cdktf.numberToHclTerraform(struct!.tracertNumMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracert_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tracertTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskMonitorConfNetIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskMonitorConfNetIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._packageNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageNum = this._packageNum;
    }
    if (this._packageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageSize = this._packageSize;
    }
    if (this._splitPackage !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitPackage = this._splitPackage;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tracertEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracertEnable = this._tracertEnable;
    }
    if (this._tracertNumMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracertNumMax = this._tracertNumMax;
    }
    if (this._tracertTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracertTimeout = this._tracertTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskMonitorConfNetIcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._packageNum = undefined;
      this._packageSize = undefined;
      this._splitPackage = undefined;
      this._targetUrl = undefined;
      this._timeout = undefined;
      this._tracertEnable = undefined;
      this._tracertNumMax = undefined;
      this._tracertTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._packageNum = value.packageNum;
      this._packageSize = value.packageSize;
      this._splitPackage = value.splitPackage;
      this._targetUrl = value.targetUrl;
      this._timeout = value.timeout;
      this._tracertEnable = value.tracertEnable;
      this._tracertNumMax = value.tracertNumMax;
      this._tracertTimeout = value.tracertTimeout;
    }
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

  // package_num - computed: false, optional: true, required: false
  private _packageNum?: number; 
  public get packageNum() {
    return this.getNumberAttribute('package_num');
  }
  public set packageNum(value: number) {
    this._packageNum = value;
  }
  public resetPackageNum() {
    this._packageNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNumInput() {
    return this._packageNum;
  }

  // package_size - computed: false, optional: true, required: false
  private _packageSize?: number; 
  public get packageSize() {
    return this.getNumberAttribute('package_size');
  }
  public set packageSize(value: number) {
    this._packageSize = value;
  }
  public resetPackageSize() {
    this._packageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageSizeInput() {
    return this._packageSize;
  }

  // split_package - computed: false, optional: true, required: false
  private _splitPackage?: boolean | cdktf.IResolvable; 
  public get splitPackage() {
    return this.getBooleanAttribute('split_package');
  }
  public set splitPackage(value: boolean | cdktf.IResolvable) {
    this._splitPackage = value;
  }
  public resetSplitPackage() {
    this._splitPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitPackageInput() {
    return this._splitPackage;
  }

  // target_url - computed: false, optional: false, required: true
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tracert_enable - computed: false, optional: true, required: false
  private _tracertEnable?: boolean | cdktf.IResolvable; 
  public get tracertEnable() {
    return this.getBooleanAttribute('tracert_enable');
  }
  public set tracertEnable(value: boolean | cdktf.IResolvable) {
    this._tracertEnable = value;
  }
  public resetTracertEnable() {
    this._tracertEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracertEnableInput() {
    return this._tracertEnable;
  }

  // tracert_num_max - computed: false, optional: true, required: false
  private _tracertNumMax?: number; 
  public get tracertNumMax() {
    return this.getNumberAttribute('tracert_num_max');
  }
  public set tracertNumMax(value: number) {
    this._tracertNumMax = value;
  }
  public resetTracertNumMax() {
    this._tracertNumMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracertNumMaxInput() {
    return this._tracertNumMax;
  }

  // tracert_timeout - computed: false, optional: true, required: false
  private _tracertTimeout?: number; 
  public get tracertTimeout() {
    return this.getNumberAttribute('tracert_timeout');
  }
  public set tracertTimeout(value: number) {
    this._tracertTimeout = value;
  }
  public resetTracertTimeout() {
    this._tracertTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracertTimeoutInput() {
    return this._tracertTimeout;
  }
}
export interface ArmsSyntheticTaskMonitorConfNetTcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#connect_times ArmsSyntheticTask#connect_times}
  */
  readonly connectTimes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#interval ArmsSyntheticTask#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#target_url ArmsSyntheticTask#target_url}
  */
  readonly targetUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#timeout ArmsSyntheticTask#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#tracert_enable ArmsSyntheticTask#tracert_enable}
  */
  readonly tracertEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#tracert_num_max ArmsSyntheticTask#tracert_num_max}
  */
  readonly tracertNumMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#tracert_timeout ArmsSyntheticTask#tracert_timeout}
  */
  readonly tracertTimeout?: number;
}

export function armsSyntheticTaskMonitorConfNetTcpToTerraform(struct?: ArmsSyntheticTaskMonitorConfNetTcpOutputReference | ArmsSyntheticTaskMonitorConfNetTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_times: cdktf.numberToTerraform(struct!.connectTimes),
    interval: cdktf.numberToTerraform(struct!.interval),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tracert_enable: cdktf.booleanToTerraform(struct!.tracertEnable),
    tracert_num_max: cdktf.numberToTerraform(struct!.tracertNumMax),
    tracert_timeout: cdktf.numberToTerraform(struct!.tracertTimeout),
  }
}


export function armsSyntheticTaskMonitorConfNetTcpToHclTerraform(struct?: ArmsSyntheticTaskMonitorConfNetTcpOutputReference | ArmsSyntheticTaskMonitorConfNetTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_times: {
      value: cdktf.numberToHclTerraform(struct!.connectTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracert_enable: {
      value: cdktf.booleanToHclTerraform(struct!.tracertEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracert_num_max: {
      value: cdktf.numberToHclTerraform(struct!.tracertNumMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracert_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tracertTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskMonitorConfNetTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskMonitorConfNetTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimes = this._connectTimes;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tracertEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracertEnable = this._tracertEnable;
    }
    if (this._tracertNumMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracertNumMax = this._tracertNumMax;
    }
    if (this._tracertTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracertTimeout = this._tracertTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskMonitorConfNetTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectTimes = undefined;
      this._interval = undefined;
      this._targetUrl = undefined;
      this._timeout = undefined;
      this._tracertEnable = undefined;
      this._tracertNumMax = undefined;
      this._tracertTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectTimes = value.connectTimes;
      this._interval = value.interval;
      this._targetUrl = value.targetUrl;
      this._timeout = value.timeout;
      this._tracertEnable = value.tracertEnable;
      this._tracertNumMax = value.tracertNumMax;
      this._tracertTimeout = value.tracertTimeout;
    }
  }

  // connect_times - computed: false, optional: true, required: false
  private _connectTimes?: number; 
  public get connectTimes() {
    return this.getNumberAttribute('connect_times');
  }
  public set connectTimes(value: number) {
    this._connectTimes = value;
  }
  public resetConnectTimes() {
    this._connectTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimesInput() {
    return this._connectTimes;
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

  // target_url - computed: false, optional: false, required: true
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tracert_enable - computed: false, optional: true, required: false
  private _tracertEnable?: boolean | cdktf.IResolvable; 
  public get tracertEnable() {
    return this.getBooleanAttribute('tracert_enable');
  }
  public set tracertEnable(value: boolean | cdktf.IResolvable) {
    this._tracertEnable = value;
  }
  public resetTracertEnable() {
    this._tracertEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracertEnableInput() {
    return this._tracertEnable;
  }

  // tracert_num_max - computed: false, optional: true, required: false
  private _tracertNumMax?: number; 
  public get tracertNumMax() {
    return this.getNumberAttribute('tracert_num_max');
  }
  public set tracertNumMax(value: number) {
    this._tracertNumMax = value;
  }
  public resetTracertNumMax() {
    this._tracertNumMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracertNumMaxInput() {
    return this._tracertNumMax;
  }

  // tracert_timeout - computed: false, optional: true, required: false
  private _tracertTimeout?: number; 
  public get tracertTimeout() {
    return this.getNumberAttribute('tracert_timeout');
  }
  public set tracertTimeout(value: number) {
    this._tracertTimeout = value;
  }
  public resetTracertTimeout() {
    this._tracertTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracertTimeoutInput() {
    return this._tracertTimeout;
  }
}
export interface ArmsSyntheticTaskMonitorConfStream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#custom_header_content ArmsSyntheticTask#custom_header_content}
  */
  readonly customHeaderContent?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#player_type ArmsSyntheticTask#player_type}
  */
  readonly playerType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#stream_address_type ArmsSyntheticTask#stream_address_type}
  */
  readonly streamAddressType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#stream_monitor_timeout ArmsSyntheticTask#stream_monitor_timeout}
  */
  readonly streamMonitorTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#stream_type ArmsSyntheticTask#stream_type}
  */
  readonly streamType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#target_url ArmsSyntheticTask#target_url}
  */
  readonly targetUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#white_list ArmsSyntheticTask#white_list}
  */
  readonly whiteList?: string;
}

export function armsSyntheticTaskMonitorConfStreamToTerraform(struct?: ArmsSyntheticTaskMonitorConfStreamOutputReference | ArmsSyntheticTaskMonitorConfStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_header_content: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customHeaderContent),
    player_type: cdktf.numberToTerraform(struct!.playerType),
    stream_address_type: cdktf.numberToTerraform(struct!.streamAddressType),
    stream_monitor_timeout: cdktf.numberToTerraform(struct!.streamMonitorTimeout),
    stream_type: cdktf.numberToTerraform(struct!.streamType),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
    white_list: cdktf.stringToTerraform(struct!.whiteList),
  }
}


export function armsSyntheticTaskMonitorConfStreamToHclTerraform(struct?: ArmsSyntheticTaskMonitorConfStreamOutputReference | ArmsSyntheticTaskMonitorConfStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_header_content: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customHeaderContent),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    player_type: {
      value: cdktf.numberToHclTerraform(struct!.playerType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_address_type: {
      value: cdktf.numberToHclTerraform(struct!.streamAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_monitor_timeout: {
      value: cdktf.numberToHclTerraform(struct!.streamMonitorTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_type: {
      value: cdktf.numberToHclTerraform(struct!.streamType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    white_list: {
      value: cdktf.stringToHclTerraform(struct!.whiteList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskMonitorConfStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskMonitorConfStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHeaderContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderContent = this._customHeaderContent;
    }
    if (this._playerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.playerType = this._playerType;
    }
    if (this._streamAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamAddressType = this._streamAddressType;
    }
    if (this._streamMonitorTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamMonitorTimeout = this._streamMonitorTimeout;
    }
    if (this._streamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamType = this._streamType;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    if (this._whiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteList = this._whiteList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskMonitorConfStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customHeaderContent = undefined;
      this._playerType = undefined;
      this._streamAddressType = undefined;
      this._streamMonitorTimeout = undefined;
      this._streamType = undefined;
      this._targetUrl = undefined;
      this._whiteList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customHeaderContent = value.customHeaderContent;
      this._playerType = value.playerType;
      this._streamAddressType = value.streamAddressType;
      this._streamMonitorTimeout = value.streamMonitorTimeout;
      this._streamType = value.streamType;
      this._targetUrl = value.targetUrl;
      this._whiteList = value.whiteList;
    }
  }

  // custom_header_content - computed: false, optional: true, required: false
  private _customHeaderContent?: { [key: string]: string }; 
  public get customHeaderContent() {
    return this.getStringMapAttribute('custom_header_content');
  }
  public set customHeaderContent(value: { [key: string]: string }) {
    this._customHeaderContent = value;
  }
  public resetCustomHeaderContent() {
    this._customHeaderContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderContentInput() {
    return this._customHeaderContent;
  }

  // player_type - computed: false, optional: true, required: false
  private _playerType?: number; 
  public get playerType() {
    return this.getNumberAttribute('player_type');
  }
  public set playerType(value: number) {
    this._playerType = value;
  }
  public resetPlayerType() {
    this._playerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerTypeInput() {
    return this._playerType;
  }

  // stream_address_type - computed: false, optional: true, required: false
  private _streamAddressType?: number; 
  public get streamAddressType() {
    return this.getNumberAttribute('stream_address_type');
  }
  public set streamAddressType(value: number) {
    this._streamAddressType = value;
  }
  public resetStreamAddressType() {
    this._streamAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAddressTypeInput() {
    return this._streamAddressType;
  }

  // stream_monitor_timeout - computed: false, optional: true, required: false
  private _streamMonitorTimeout?: number; 
  public get streamMonitorTimeout() {
    return this.getNumberAttribute('stream_monitor_timeout');
  }
  public set streamMonitorTimeout(value: number) {
    this._streamMonitorTimeout = value;
  }
  public resetStreamMonitorTimeout() {
    this._streamMonitorTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamMonitorTimeoutInput() {
    return this._streamMonitorTimeout;
  }

  // stream_type - computed: false, optional: true, required: false
  private _streamType?: number; 
  public get streamType() {
    return this.getNumberAttribute('stream_type');
  }
  public set streamType(value: number) {
    this._streamType = value;
  }
  public resetStreamType() {
    this._streamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTypeInput() {
    return this._streamType;
  }

  // target_url - computed: false, optional: true, required: false
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  public resetTargetUrl() {
    this._targetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }

  // white_list - computed: false, optional: true, required: false
  private _whiteList?: string; 
  public get whiteList() {
    return this.getStringAttribute('white_list');
  }
  public set whiteList(value: string) {
    this._whiteList = value;
  }
  public resetWhiteList() {
    this._whiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListInput() {
    return this._whiteList;
  }
}
export interface ArmsSyntheticTaskMonitorConfWebsite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#automatic_scrolling ArmsSyntheticTask#automatic_scrolling}
  */
  readonly automaticScrolling?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#custom_header ArmsSyntheticTask#custom_header}
  */
  readonly customHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#custom_header_content ArmsSyntheticTask#custom_header_content}
  */
  readonly customHeaderContent?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#disable_cache ArmsSyntheticTask#disable_cache}
  */
  readonly disableCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#disable_compression ArmsSyntheticTask#disable_compression}
  */
  readonly disableCompression?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#dns_hijack_whitelist ArmsSyntheticTask#dns_hijack_whitelist}
  */
  readonly dnsHijackWhitelist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#element_blacklist ArmsSyntheticTask#element_blacklist}
  */
  readonly elementBlacklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#filter_invalid_ip ArmsSyntheticTask#filter_invalid_ip}
  */
  readonly filterInvalidIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#flow_hijack_jump_times ArmsSyntheticTask#flow_hijack_jump_times}
  */
  readonly flowHijackJumpTimes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#flow_hijack_logo ArmsSyntheticTask#flow_hijack_logo}
  */
  readonly flowHijackLogo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#ignore_certificate_error ArmsSyntheticTask#ignore_certificate_error}
  */
  readonly ignoreCertificateError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#monitor_timeout ArmsSyntheticTask#monitor_timeout}
  */
  readonly monitorTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#page_tamper ArmsSyntheticTask#page_tamper}
  */
  readonly pageTamper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#redirection ArmsSyntheticTask#redirection}
  */
  readonly redirection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#slow_element_threshold ArmsSyntheticTask#slow_element_threshold}
  */
  readonly slowElementThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#target_url ArmsSyntheticTask#target_url}
  */
  readonly targetUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#verify_string_blacklist ArmsSyntheticTask#verify_string_blacklist}
  */
  readonly verifyStringBlacklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#verify_string_whitelist ArmsSyntheticTask#verify_string_whitelist}
  */
  readonly verifyStringWhitelist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#wait_completion_time ArmsSyntheticTask#wait_completion_time}
  */
  readonly waitCompletionTime?: number;
}

export function armsSyntheticTaskMonitorConfWebsiteToTerraform(struct?: ArmsSyntheticTaskMonitorConfWebsiteOutputReference | ArmsSyntheticTaskMonitorConfWebsite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_scrolling: cdktf.numberToTerraform(struct!.automaticScrolling),
    custom_header: cdktf.numberToTerraform(struct!.customHeader),
    custom_header_content: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customHeaderContent),
    disable_cache: cdktf.numberToTerraform(struct!.disableCache),
    disable_compression: cdktf.numberToTerraform(struct!.disableCompression),
    dns_hijack_whitelist: cdktf.stringToTerraform(struct!.dnsHijackWhitelist),
    element_blacklist: cdktf.stringToTerraform(struct!.elementBlacklist),
    filter_invalid_ip: cdktf.numberToTerraform(struct!.filterInvalidIp),
    flow_hijack_jump_times: cdktf.numberToTerraform(struct!.flowHijackJumpTimes),
    flow_hijack_logo: cdktf.stringToTerraform(struct!.flowHijackLogo),
    ignore_certificate_error: cdktf.numberToTerraform(struct!.ignoreCertificateError),
    monitor_timeout: cdktf.numberToTerraform(struct!.monitorTimeout),
    page_tamper: cdktf.stringToTerraform(struct!.pageTamper),
    redirection: cdktf.numberToTerraform(struct!.redirection),
    slow_element_threshold: cdktf.numberToTerraform(struct!.slowElementThreshold),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
    verify_string_blacklist: cdktf.stringToTerraform(struct!.verifyStringBlacklist),
    verify_string_whitelist: cdktf.stringToTerraform(struct!.verifyStringWhitelist),
    wait_completion_time: cdktf.numberToTerraform(struct!.waitCompletionTime),
  }
}


export function armsSyntheticTaskMonitorConfWebsiteToHclTerraform(struct?: ArmsSyntheticTaskMonitorConfWebsiteOutputReference | ArmsSyntheticTaskMonitorConfWebsite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_scrolling: {
      value: cdktf.numberToHclTerraform(struct!.automaticScrolling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_header: {
      value: cdktf.numberToHclTerraform(struct!.customHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_header_content: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customHeaderContent),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disable_cache: {
      value: cdktf.numberToHclTerraform(struct!.disableCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_compression: {
      value: cdktf.numberToHclTerraform(struct!.disableCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_hijack_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.dnsHijackWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element_blacklist: {
      value: cdktf.stringToHclTerraform(struct!.elementBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_invalid_ip: {
      value: cdktf.numberToHclTerraform(struct!.filterInvalidIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flow_hijack_jump_times: {
      value: cdktf.numberToHclTerraform(struct!.flowHijackJumpTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flow_hijack_logo: {
      value: cdktf.stringToHclTerraform(struct!.flowHijackLogo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_certificate_error: {
      value: cdktf.numberToHclTerraform(struct!.ignoreCertificateError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_timeout: {
      value: cdktf.numberToHclTerraform(struct!.monitorTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_tamper: {
      value: cdktf.stringToHclTerraform(struct!.pageTamper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirection: {
      value: cdktf.numberToHclTerraform(struct!.redirection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow_element_threshold: {
      value: cdktf.numberToHclTerraform(struct!.slowElementThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_string_blacklist: {
      value: cdktf.stringToHclTerraform(struct!.verifyStringBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_string_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.verifyStringWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_completion_time: {
      value: cdktf.numberToHclTerraform(struct!.waitCompletionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskMonitorConfWebsiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskMonitorConfWebsite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticScrolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticScrolling = this._automaticScrolling;
    }
    if (this._customHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeader = this._customHeader;
    }
    if (this._customHeaderContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderContent = this._customHeaderContent;
    }
    if (this._disableCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCache = this._disableCache;
    }
    if (this._disableCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCompression = this._disableCompression;
    }
    if (this._dnsHijackWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsHijackWhitelist = this._dnsHijackWhitelist;
    }
    if (this._elementBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementBlacklist = this._elementBlacklist;
    }
    if (this._filterInvalidIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterInvalidIp = this._filterInvalidIp;
    }
    if (this._flowHijackJumpTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowHijackJumpTimes = this._flowHijackJumpTimes;
    }
    if (this._flowHijackLogo !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowHijackLogo = this._flowHijackLogo;
    }
    if (this._ignoreCertificateError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCertificateError = this._ignoreCertificateError;
    }
    if (this._monitorTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorTimeout = this._monitorTimeout;
    }
    if (this._pageTamper !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageTamper = this._pageTamper;
    }
    if (this._redirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirection = this._redirection;
    }
    if (this._slowElementThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowElementThreshold = this._slowElementThreshold;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    if (this._verifyStringBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyStringBlacklist = this._verifyStringBlacklist;
    }
    if (this._verifyStringWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyStringWhitelist = this._verifyStringWhitelist;
    }
    if (this._waitCompletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitCompletionTime = this._waitCompletionTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskMonitorConfWebsite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticScrolling = undefined;
      this._customHeader = undefined;
      this._customHeaderContent = undefined;
      this._disableCache = undefined;
      this._disableCompression = undefined;
      this._dnsHijackWhitelist = undefined;
      this._elementBlacklist = undefined;
      this._filterInvalidIp = undefined;
      this._flowHijackJumpTimes = undefined;
      this._flowHijackLogo = undefined;
      this._ignoreCertificateError = undefined;
      this._monitorTimeout = undefined;
      this._pageTamper = undefined;
      this._redirection = undefined;
      this._slowElementThreshold = undefined;
      this._targetUrl = undefined;
      this._verifyStringBlacklist = undefined;
      this._verifyStringWhitelist = undefined;
      this._waitCompletionTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticScrolling = value.automaticScrolling;
      this._customHeader = value.customHeader;
      this._customHeaderContent = value.customHeaderContent;
      this._disableCache = value.disableCache;
      this._disableCompression = value.disableCompression;
      this._dnsHijackWhitelist = value.dnsHijackWhitelist;
      this._elementBlacklist = value.elementBlacklist;
      this._filterInvalidIp = value.filterInvalidIp;
      this._flowHijackJumpTimes = value.flowHijackJumpTimes;
      this._flowHijackLogo = value.flowHijackLogo;
      this._ignoreCertificateError = value.ignoreCertificateError;
      this._monitorTimeout = value.monitorTimeout;
      this._pageTamper = value.pageTamper;
      this._redirection = value.redirection;
      this._slowElementThreshold = value.slowElementThreshold;
      this._targetUrl = value.targetUrl;
      this._verifyStringBlacklist = value.verifyStringBlacklist;
      this._verifyStringWhitelist = value.verifyStringWhitelist;
      this._waitCompletionTime = value.waitCompletionTime;
    }
  }

  // automatic_scrolling - computed: false, optional: true, required: false
  private _automaticScrolling?: number; 
  public get automaticScrolling() {
    return this.getNumberAttribute('automatic_scrolling');
  }
  public set automaticScrolling(value: number) {
    this._automaticScrolling = value;
  }
  public resetAutomaticScrolling() {
    this._automaticScrolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticScrollingInput() {
    return this._automaticScrolling;
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader?: number; 
  public get customHeader() {
    return this.getNumberAttribute('custom_header');
  }
  public set customHeader(value: number) {
    this._customHeader = value;
  }
  public resetCustomHeader() {
    this._customHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader;
  }

  // custom_header_content - computed: false, optional: true, required: false
  private _customHeaderContent?: { [key: string]: string }; 
  public get customHeaderContent() {
    return this.getStringMapAttribute('custom_header_content');
  }
  public set customHeaderContent(value: { [key: string]: string }) {
    this._customHeaderContent = value;
  }
  public resetCustomHeaderContent() {
    this._customHeaderContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderContentInput() {
    return this._customHeaderContent;
  }

  // disable_cache - computed: false, optional: true, required: false
  private _disableCache?: number; 
  public get disableCache() {
    return this.getNumberAttribute('disable_cache');
  }
  public set disableCache(value: number) {
    this._disableCache = value;
  }
  public resetDisableCache() {
    this._disableCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCacheInput() {
    return this._disableCache;
  }

  // disable_compression - computed: false, optional: true, required: false
  private _disableCompression?: number; 
  public get disableCompression() {
    return this.getNumberAttribute('disable_compression');
  }
  public set disableCompression(value: number) {
    this._disableCompression = value;
  }
  public resetDisableCompression() {
    this._disableCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCompressionInput() {
    return this._disableCompression;
  }

  // dns_hijack_whitelist - computed: false, optional: true, required: false
  private _dnsHijackWhitelist?: string; 
  public get dnsHijackWhitelist() {
    return this.getStringAttribute('dns_hijack_whitelist');
  }
  public set dnsHijackWhitelist(value: string) {
    this._dnsHijackWhitelist = value;
  }
  public resetDnsHijackWhitelist() {
    this._dnsHijackWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHijackWhitelistInput() {
    return this._dnsHijackWhitelist;
  }

  // element_blacklist - computed: false, optional: true, required: false
  private _elementBlacklist?: string; 
  public get elementBlacklist() {
    return this.getStringAttribute('element_blacklist');
  }
  public set elementBlacklist(value: string) {
    this._elementBlacklist = value;
  }
  public resetElementBlacklist() {
    this._elementBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementBlacklistInput() {
    return this._elementBlacklist;
  }

  // filter_invalid_ip - computed: false, optional: true, required: false
  private _filterInvalidIp?: number; 
  public get filterInvalidIp() {
    return this.getNumberAttribute('filter_invalid_ip');
  }
  public set filterInvalidIp(value: number) {
    this._filterInvalidIp = value;
  }
  public resetFilterInvalidIp() {
    this._filterInvalidIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInvalidIpInput() {
    return this._filterInvalidIp;
  }

  // flow_hijack_jump_times - computed: false, optional: true, required: false
  private _flowHijackJumpTimes?: number; 
  public get flowHijackJumpTimes() {
    return this.getNumberAttribute('flow_hijack_jump_times');
  }
  public set flowHijackJumpTimes(value: number) {
    this._flowHijackJumpTimes = value;
  }
  public resetFlowHijackJumpTimes() {
    this._flowHijackJumpTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowHijackJumpTimesInput() {
    return this._flowHijackJumpTimes;
  }

  // flow_hijack_logo - computed: false, optional: true, required: false
  private _flowHijackLogo?: string; 
  public get flowHijackLogo() {
    return this.getStringAttribute('flow_hijack_logo');
  }
  public set flowHijackLogo(value: string) {
    this._flowHijackLogo = value;
  }
  public resetFlowHijackLogo() {
    this._flowHijackLogo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowHijackLogoInput() {
    return this._flowHijackLogo;
  }

  // ignore_certificate_error - computed: false, optional: true, required: false
  private _ignoreCertificateError?: number; 
  public get ignoreCertificateError() {
    return this.getNumberAttribute('ignore_certificate_error');
  }
  public set ignoreCertificateError(value: number) {
    this._ignoreCertificateError = value;
  }
  public resetIgnoreCertificateError() {
    this._ignoreCertificateError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateErrorInput() {
    return this._ignoreCertificateError;
  }

  // monitor_timeout - computed: false, optional: true, required: false
  private _monitorTimeout?: number; 
  public get monitorTimeout() {
    return this.getNumberAttribute('monitor_timeout');
  }
  public set monitorTimeout(value: number) {
    this._monitorTimeout = value;
  }
  public resetMonitorTimeout() {
    this._monitorTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTimeoutInput() {
    return this._monitorTimeout;
  }

  // page_tamper - computed: false, optional: true, required: false
  private _pageTamper?: string; 
  public get pageTamper() {
    return this.getStringAttribute('page_tamper');
  }
  public set pageTamper(value: string) {
    this._pageTamper = value;
  }
  public resetPageTamper() {
    this._pageTamper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageTamperInput() {
    return this._pageTamper;
  }

  // redirection - computed: false, optional: true, required: false
  private _redirection?: number; 
  public get redirection() {
    return this.getNumberAttribute('redirection');
  }
  public set redirection(value: number) {
    this._redirection = value;
  }
  public resetRedirection() {
    this._redirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectionInput() {
    return this._redirection;
  }

  // slow_element_threshold - computed: false, optional: true, required: false
  private _slowElementThreshold?: number; 
  public get slowElementThreshold() {
    return this.getNumberAttribute('slow_element_threshold');
  }
  public set slowElementThreshold(value: number) {
    this._slowElementThreshold = value;
  }
  public resetSlowElementThreshold() {
    this._slowElementThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowElementThresholdInput() {
    return this._slowElementThreshold;
  }

  // target_url - computed: false, optional: false, required: true
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }

  // verify_string_blacklist - computed: false, optional: true, required: false
  private _verifyStringBlacklist?: string; 
  public get verifyStringBlacklist() {
    return this.getStringAttribute('verify_string_blacklist');
  }
  public set verifyStringBlacklist(value: string) {
    this._verifyStringBlacklist = value;
  }
  public resetVerifyStringBlacklist() {
    this._verifyStringBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyStringBlacklistInput() {
    return this._verifyStringBlacklist;
  }

  // verify_string_whitelist - computed: false, optional: true, required: false
  private _verifyStringWhitelist?: string; 
  public get verifyStringWhitelist() {
    return this.getStringAttribute('verify_string_whitelist');
  }
  public set verifyStringWhitelist(value: string) {
    this._verifyStringWhitelist = value;
  }
  public resetVerifyStringWhitelist() {
    this._verifyStringWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyStringWhitelistInput() {
    return this._verifyStringWhitelist;
  }

  // wait_completion_time - computed: false, optional: true, required: false
  private _waitCompletionTime?: number; 
  public get waitCompletionTime() {
    return this.getNumberAttribute('wait_completion_time');
  }
  public set waitCompletionTime(value: number) {
    this._waitCompletionTime = value;
  }
  public resetWaitCompletionTime() {
    this._waitCompletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitCompletionTimeInput() {
    return this._waitCompletionTime;
  }
}
export interface ArmsSyntheticTaskMonitorConf {
  /**
  * api_http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#api_http ArmsSyntheticTask#api_http}
  */
  readonly apiHttp?: ArmsSyntheticTaskMonitorConfApiHttp;
  /**
  * file_download block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#file_download ArmsSyntheticTask#file_download}
  */
  readonly fileDownload?: ArmsSyntheticTaskMonitorConfFileDownload;
  /**
  * net_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#net_dns ArmsSyntheticTask#net_dns}
  */
  readonly netDns?: ArmsSyntheticTaskMonitorConfNetDns;
  /**
  * net_icmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#net_icmp ArmsSyntheticTask#net_icmp}
  */
  readonly netIcmp?: ArmsSyntheticTaskMonitorConfNetIcmp;
  /**
  * net_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#net_tcp ArmsSyntheticTask#net_tcp}
  */
  readonly netTcp?: ArmsSyntheticTaskMonitorConfNetTcp;
  /**
  * stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#stream ArmsSyntheticTask#stream}
  */
  readonly stream?: ArmsSyntheticTaskMonitorConfStream;
  /**
  * website block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#website ArmsSyntheticTask#website}
  */
  readonly website?: ArmsSyntheticTaskMonitorConfWebsite;
}

export function armsSyntheticTaskMonitorConfToTerraform(struct?: ArmsSyntheticTaskMonitorConfOutputReference | ArmsSyntheticTaskMonitorConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_http: armsSyntheticTaskMonitorConfApiHttpToTerraform(struct!.apiHttp),
    file_download: armsSyntheticTaskMonitorConfFileDownloadToTerraform(struct!.fileDownload),
    net_dns: armsSyntheticTaskMonitorConfNetDnsToTerraform(struct!.netDns),
    net_icmp: armsSyntheticTaskMonitorConfNetIcmpToTerraform(struct!.netIcmp),
    net_tcp: armsSyntheticTaskMonitorConfNetTcpToTerraform(struct!.netTcp),
    stream: armsSyntheticTaskMonitorConfStreamToTerraform(struct!.stream),
    website: armsSyntheticTaskMonitorConfWebsiteToTerraform(struct!.website),
  }
}


export function armsSyntheticTaskMonitorConfToHclTerraform(struct?: ArmsSyntheticTaskMonitorConfOutputReference | ArmsSyntheticTaskMonitorConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_http: {
      value: armsSyntheticTaskMonitorConfApiHttpToHclTerraform(struct!.apiHttp),
      isBlock: true,
      type: "list",
      storageClassType: "ArmsSyntheticTaskMonitorConfApiHttpList",
    },
    file_download: {
      value: armsSyntheticTaskMonitorConfFileDownloadToHclTerraform(struct!.fileDownload),
      isBlock: true,
      type: "list",
      storageClassType: "ArmsSyntheticTaskMonitorConfFileDownloadList",
    },
    net_dns: {
      value: armsSyntheticTaskMonitorConfNetDnsToHclTerraform(struct!.netDns),
      isBlock: true,
      type: "list",
      storageClassType: "ArmsSyntheticTaskMonitorConfNetDnsList",
    },
    net_icmp: {
      value: armsSyntheticTaskMonitorConfNetIcmpToHclTerraform(struct!.netIcmp),
      isBlock: true,
      type: "list",
      storageClassType: "ArmsSyntheticTaskMonitorConfNetIcmpList",
    },
    net_tcp: {
      value: armsSyntheticTaskMonitorConfNetTcpToHclTerraform(struct!.netTcp),
      isBlock: true,
      type: "list",
      storageClassType: "ArmsSyntheticTaskMonitorConfNetTcpList",
    },
    stream: {
      value: armsSyntheticTaskMonitorConfStreamToHclTerraform(struct!.stream),
      isBlock: true,
      type: "list",
      storageClassType: "ArmsSyntheticTaskMonitorConfStreamList",
    },
    website: {
      value: armsSyntheticTaskMonitorConfWebsiteToHclTerraform(struct!.website),
      isBlock: true,
      type: "list",
      storageClassType: "ArmsSyntheticTaskMonitorConfWebsiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskMonitorConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArmsSyntheticTaskMonitorConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiHttp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiHttp = this._apiHttp?.internalValue;
    }
    if (this._fileDownload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileDownload = this._fileDownload?.internalValue;
    }
    if (this._netDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netDns = this._netDns?.internalValue;
    }
    if (this._netIcmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netIcmp = this._netIcmp?.internalValue;
    }
    if (this._netTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netTcp = this._netTcp?.internalValue;
    }
    if (this._stream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream?.internalValue;
    }
    if (this._website?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.website = this._website?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskMonitorConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiHttp.internalValue = undefined;
      this._fileDownload.internalValue = undefined;
      this._netDns.internalValue = undefined;
      this._netIcmp.internalValue = undefined;
      this._netTcp.internalValue = undefined;
      this._stream.internalValue = undefined;
      this._website.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiHttp.internalValue = value.apiHttp;
      this._fileDownload.internalValue = value.fileDownload;
      this._netDns.internalValue = value.netDns;
      this._netIcmp.internalValue = value.netIcmp;
      this._netTcp.internalValue = value.netTcp;
      this._stream.internalValue = value.stream;
      this._website.internalValue = value.website;
    }
  }

  // api_http - computed: false, optional: true, required: false
  private _apiHttp = new ArmsSyntheticTaskMonitorConfApiHttpOutputReference(this, "api_http");
  public get apiHttp() {
    return this._apiHttp;
  }
  public putApiHttp(value: ArmsSyntheticTaskMonitorConfApiHttp) {
    this._apiHttp.internalValue = value;
  }
  public resetApiHttp() {
    this._apiHttp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiHttpInput() {
    return this._apiHttp.internalValue;
  }

  // file_download - computed: false, optional: true, required: false
  private _fileDownload = new ArmsSyntheticTaskMonitorConfFileDownloadOutputReference(this, "file_download");
  public get fileDownload() {
    return this._fileDownload;
  }
  public putFileDownload(value: ArmsSyntheticTaskMonitorConfFileDownload) {
    this._fileDownload.internalValue = value;
  }
  public resetFileDownload() {
    this._fileDownload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDownloadInput() {
    return this._fileDownload.internalValue;
  }

  // net_dns - computed: false, optional: true, required: false
  private _netDns = new ArmsSyntheticTaskMonitorConfNetDnsOutputReference(this, "net_dns");
  public get netDns() {
    return this._netDns;
  }
  public putNetDns(value: ArmsSyntheticTaskMonitorConfNetDns) {
    this._netDns.internalValue = value;
  }
  public resetNetDns() {
    this._netDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netDnsInput() {
    return this._netDns.internalValue;
  }

  // net_icmp - computed: false, optional: true, required: false
  private _netIcmp = new ArmsSyntheticTaskMonitorConfNetIcmpOutputReference(this, "net_icmp");
  public get netIcmp() {
    return this._netIcmp;
  }
  public putNetIcmp(value: ArmsSyntheticTaskMonitorConfNetIcmp) {
    this._netIcmp.internalValue = value;
  }
  public resetNetIcmp() {
    this._netIcmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIcmpInput() {
    return this._netIcmp.internalValue;
  }

  // net_tcp - computed: false, optional: true, required: false
  private _netTcp = new ArmsSyntheticTaskMonitorConfNetTcpOutputReference(this, "net_tcp");
  public get netTcp() {
    return this._netTcp;
  }
  public putNetTcp(value: ArmsSyntheticTaskMonitorConfNetTcp) {
    this._netTcp.internalValue = value;
  }
  public resetNetTcp() {
    this._netTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netTcpInput() {
    return this._netTcp.internalValue;
  }

  // stream - computed: false, optional: true, required: false
  private _stream = new ArmsSyntheticTaskMonitorConfStreamOutputReference(this, "stream");
  public get stream() {
    return this._stream;
  }
  public putStream(value: ArmsSyntheticTaskMonitorConfStream) {
    this._stream.internalValue = value;
  }
  public resetStream() {
    this._stream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream.internalValue;
  }

  // website - computed: false, optional: true, required: false
  private _website = new ArmsSyntheticTaskMonitorConfWebsiteOutputReference(this, "website");
  public get website() {
    return this._website;
  }
  public putWebsite(value: ArmsSyntheticTaskMonitorConfWebsite) {
    this._website.internalValue = value;
  }
  public resetWebsite() {
    this._website.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website.internalValue;
  }
}
export interface ArmsSyntheticTaskMonitors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#city_code ArmsSyntheticTask#city_code}
  */
  readonly cityCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#client_type ArmsSyntheticTask#client_type}
  */
  readonly clientType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#operator_code ArmsSyntheticTask#operator_code}
  */
  readonly operatorCode: string;
}

export function armsSyntheticTaskMonitorsToTerraform(struct?: ArmsSyntheticTaskMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city_code: cdktf.stringToTerraform(struct!.cityCode),
    client_type: cdktf.numberToTerraform(struct!.clientType),
    operator_code: cdktf.stringToTerraform(struct!.operatorCode),
  }
}


export function armsSyntheticTaskMonitorsToHclTerraform(struct?: ArmsSyntheticTaskMonitors | cdktf.IResolvable): any {
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
    client_type: {
      value: cdktf.numberToHclTerraform(struct!.clientType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator_code: {
      value: cdktf.stringToHclTerraform(struct!.operatorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArmsSyntheticTaskMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cityCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cityCode = this._cityCode;
    }
    if (this._clientType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientType = this._clientType;
    }
    if (this._operatorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorCode = this._operatorCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cityCode = undefined;
      this._clientType = undefined;
      this._operatorCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cityCode = value.cityCode;
      this._clientType = value.clientType;
      this._operatorCode = value.operatorCode;
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

  // client_type - computed: false, optional: false, required: true
  private _clientType?: number; 
  public get clientType() {
    return this.getNumberAttribute('client_type');
  }
  public set clientType(value: number) {
    this._clientType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypeInput() {
    return this._clientType;
  }

  // operator_code - computed: false, optional: false, required: true
  private _operatorCode?: string; 
  public get operatorCode() {
    return this.getStringAttribute('operator_code');
  }
  public set operatorCode(value: string) {
    this._operatorCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorCodeInput() {
    return this._operatorCode;
  }
}

export class ArmsSyntheticTaskMonitorsList extends cdktf.ComplexList {
  public internalValue? : ArmsSyntheticTaskMonitors[] | cdktf.IResolvable

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
  public get(index: number): ArmsSyntheticTaskMonitorsOutputReference {
    return new ArmsSyntheticTaskMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArmsSyntheticTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#create ArmsSyntheticTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#delete ArmsSyntheticTask#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#update ArmsSyntheticTask#update}
  */
  readonly update?: string;
}

export function armsSyntheticTaskTimeoutsToTerraform(struct?: ArmsSyntheticTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function armsSyntheticTaskTimeoutsToHclTerraform(struct?: ArmsSyntheticTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArmsSyntheticTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArmsSyntheticTaskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArmsSyntheticTaskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task alicloud_arms_synthetic_task}
*/
export class ArmsSyntheticTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_arms_synthetic_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArmsSyntheticTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArmsSyntheticTask to import
  * @param importFromId The id of the existing ArmsSyntheticTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArmsSyntheticTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_arms_synthetic_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/arms_synthetic_task alicloud_arms_synthetic_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArmsSyntheticTaskConfig
  */
  public constructor(scope: Construct, id: string, config: ArmsSyntheticTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_arms_synthetic_task',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._frequency = config.frequency;
    this._id = config.id;
    this._monitorCategory = config.monitorCategory;
    this._resourceGroupId = config.resourceGroupId;
    this._status = config.status;
    this._syntheticTaskName = config.syntheticTaskName;
    this._tags = config.tags;
    this._taskType = config.taskType;
    this._availableAssertions.internalValue = config.availableAssertions;
    this._commonSetting.internalValue = config.commonSetting;
    this._customPeriod.internalValue = config.customPeriod;
    this._monitorConf.internalValue = config.monitorConf;
    this._monitors.internalValue = config.monitors;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // monitor_category - computed: false, optional: false, required: true
  private _monitorCategory?: number; 
  public get monitorCategory() {
    return this.getNumberAttribute('monitor_category');
  }
  public set monitorCategory(value: number) {
    this._monitorCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorCategoryInput() {
    return this._monitorCategory;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // status - computed: true, optional: true, required: false
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

  // synthetic_task_name - computed: false, optional: false, required: true
  private _syntheticTaskName?: string; 
  public get syntheticTaskName() {
    return this.getStringAttribute('synthetic_task_name');
  }
  public set syntheticTaskName(value: string) {
    this._syntheticTaskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticTaskNameInput() {
    return this._syntheticTaskName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: number; 
  public get taskType() {
    return this.getNumberAttribute('task_type');
  }
  public set taskType(value: number) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // available_assertions - computed: false, optional: true, required: false
  private _availableAssertions = new ArmsSyntheticTaskAvailableAssertionsList(this, "available_assertions", false);
  public get availableAssertions() {
    return this._availableAssertions;
  }
  public putAvailableAssertions(value: ArmsSyntheticTaskAvailableAssertions[] | cdktf.IResolvable) {
    this._availableAssertions.internalValue = value;
  }
  public resetAvailableAssertions() {
    this._availableAssertions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableAssertionsInput() {
    return this._availableAssertions.internalValue;
  }

  // common_setting - computed: false, optional: true, required: false
  private _commonSetting = new ArmsSyntheticTaskCommonSettingOutputReference(this, "common_setting");
  public get commonSetting() {
    return this._commonSetting;
  }
  public putCommonSetting(value: ArmsSyntheticTaskCommonSetting) {
    this._commonSetting.internalValue = value;
  }
  public resetCommonSetting() {
    this._commonSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonSettingInput() {
    return this._commonSetting.internalValue;
  }

  // custom_period - computed: false, optional: true, required: false
  private _customPeriod = new ArmsSyntheticTaskCustomPeriodOutputReference(this, "custom_period");
  public get customPeriod() {
    return this._customPeriod;
  }
  public putCustomPeriod(value: ArmsSyntheticTaskCustomPeriod) {
    this._customPeriod.internalValue = value;
  }
  public resetCustomPeriod() {
    this._customPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPeriodInput() {
    return this._customPeriod.internalValue;
  }

  // monitor_conf - computed: false, optional: false, required: true
  private _monitorConf = new ArmsSyntheticTaskMonitorConfOutputReference(this, "monitor_conf");
  public get monitorConf() {
    return this._monitorConf;
  }
  public putMonitorConf(value: ArmsSyntheticTaskMonitorConf) {
    this._monitorConf.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorConfInput() {
    return this._monitorConf.internalValue;
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors = new ArmsSyntheticTaskMonitorsList(this, "monitors", false);
  public get monitors() {
    return this._monitors;
  }
  public putMonitors(value: ArmsSyntheticTaskMonitors[] | cdktf.IResolvable) {
    this._monitors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ArmsSyntheticTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ArmsSyntheticTaskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      monitor_category: cdktf.numberToTerraform(this._monitorCategory),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      status: cdktf.stringToTerraform(this._status),
      synthetic_task_name: cdktf.stringToTerraform(this._syntheticTaskName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      task_type: cdktf.numberToTerraform(this._taskType),
      available_assertions: cdktf.listMapper(armsSyntheticTaskAvailableAssertionsToTerraform, true)(this._availableAssertions.internalValue),
      common_setting: armsSyntheticTaskCommonSettingToTerraform(this._commonSetting.internalValue),
      custom_period: armsSyntheticTaskCustomPeriodToTerraform(this._customPeriod.internalValue),
      monitor_conf: armsSyntheticTaskMonitorConfToTerraform(this._monitorConf.internalValue),
      monitors: cdktf.listMapper(armsSyntheticTaskMonitorsToTerraform, true)(this._monitors.internalValue),
      timeouts: armsSyntheticTaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      monitor_category: {
        value: cdktf.numberToHclTerraform(this._monitorCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synthetic_task_name: {
        value: cdktf.stringToHclTerraform(this._syntheticTaskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      task_type: {
        value: cdktf.numberToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      available_assertions: {
        value: cdktf.listMapperHcl(armsSyntheticTaskAvailableAssertionsToHclTerraform, true)(this._availableAssertions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArmsSyntheticTaskAvailableAssertionsList",
      },
      common_setting: {
        value: armsSyntheticTaskCommonSettingToHclTerraform(this._commonSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArmsSyntheticTaskCommonSettingList",
      },
      custom_period: {
        value: armsSyntheticTaskCustomPeriodToHclTerraform(this._customPeriod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArmsSyntheticTaskCustomPeriodList",
      },
      monitor_conf: {
        value: armsSyntheticTaskMonitorConfToHclTerraform(this._monitorConf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArmsSyntheticTaskMonitorConfList",
      },
      monitors: {
        value: cdktf.listMapperHcl(armsSyntheticTaskMonitorsToHclTerraform, true)(this._monitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArmsSyntheticTaskMonitorsList",
      },
      timeouts: {
        value: armsSyntheticTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArmsSyntheticTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
