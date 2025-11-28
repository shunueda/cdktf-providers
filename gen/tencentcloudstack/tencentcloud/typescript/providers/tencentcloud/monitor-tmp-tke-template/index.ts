// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorTmpTkeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#id MonitorTmpTkeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#template MonitorTmpTkeTemplate#template}
  */
  readonly template: MonitorTmpTkeTemplateTemplate;
}
export interface MonitorTmpTkeTemplateTemplatePodMonitors {
  /**
  * Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#config MonitorTmpTkeTemplate#config}
  */
  readonly config: string;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#name MonitorTmpTkeTemplate#name}
  */
  readonly name: string;
  /**
  * Used for the argument, if the configuration comes to the template, the template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#template_id MonitorTmpTkeTemplate#template_id}
  */
  readonly templateId?: string;
}

export function monitorTmpTkeTemplateTemplatePodMonitorsToTerraform(struct?: MonitorTmpTkeTemplateTemplatePodMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function monitorTmpTkeTemplateTemplatePodMonitorsToHclTerraform(struct?: MonitorTmpTkeTemplateTemplatePodMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeTemplateTemplatePodMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeTemplateTemplatePodMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeTemplateTemplatePodMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
      this._templateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
      this._templateId = value.templateId;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}

export class MonitorTmpTkeTemplateTemplatePodMonitorsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeTemplateTemplatePodMonitors[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeTemplateTemplatePodMonitorsOutputReference {
    return new MonitorTmpTkeTemplateTemplatePodMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeTemplateTemplateRawJobs {
  /**
  * Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#config MonitorTmpTkeTemplate#config}
  */
  readonly config: string;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#name MonitorTmpTkeTemplate#name}
  */
  readonly name: string;
  /**
  * Used for the argument, if the configuration comes to the template, the template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#template_id MonitorTmpTkeTemplate#template_id}
  */
  readonly templateId?: string;
}

export function monitorTmpTkeTemplateTemplateRawJobsToTerraform(struct?: MonitorTmpTkeTemplateTemplateRawJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function monitorTmpTkeTemplateTemplateRawJobsToHclTerraform(struct?: MonitorTmpTkeTemplateTemplateRawJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeTemplateTemplateRawJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeTemplateTemplateRawJobs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeTemplateTemplateRawJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
      this._templateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
      this._templateId = value.templateId;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}

export class MonitorTmpTkeTemplateTemplateRawJobsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeTemplateTemplateRawJobs[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeTemplateTemplateRawJobsOutputReference {
    return new MonitorTmpTkeTemplateTemplateRawJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeTemplateTemplateRecordRules {
  /**
  * Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#config MonitorTmpTkeTemplate#config}
  */
  readonly config: string;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#name MonitorTmpTkeTemplate#name}
  */
  readonly name: string;
  /**
  * Used for the argument, if the configuration comes to the template, the template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#template_id MonitorTmpTkeTemplate#template_id}
  */
  readonly templateId?: string;
}

export function monitorTmpTkeTemplateTemplateRecordRulesToTerraform(struct?: MonitorTmpTkeTemplateTemplateRecordRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function monitorTmpTkeTemplateTemplateRecordRulesToHclTerraform(struct?: MonitorTmpTkeTemplateTemplateRecordRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeTemplateTemplateRecordRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeTemplateTemplateRecordRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeTemplateTemplateRecordRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
      this._templateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
      this._templateId = value.templateId;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}

export class MonitorTmpTkeTemplateTemplateRecordRulesList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeTemplateTemplateRecordRules[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeTemplateTemplateRecordRulesOutputReference {
    return new MonitorTmpTkeTemplateTemplateRecordRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeTemplateTemplateServiceMonitors {
  /**
  * Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#config MonitorTmpTkeTemplate#config}
  */
  readonly config: string;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#name MonitorTmpTkeTemplate#name}
  */
  readonly name: string;
  /**
  * Used for the argument, if the configuration comes to the template, the template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#template_id MonitorTmpTkeTemplate#template_id}
  */
  readonly templateId?: string;
}

export function monitorTmpTkeTemplateTemplateServiceMonitorsToTerraform(struct?: MonitorTmpTkeTemplateTemplateServiceMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function monitorTmpTkeTemplateTemplateServiceMonitorsToHclTerraform(struct?: MonitorTmpTkeTemplateTemplateServiceMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeTemplateTemplateServiceMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeTemplateTemplateServiceMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeTemplateTemplateServiceMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
      this._templateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
      this._templateId = value.templateId;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}

export class MonitorTmpTkeTemplateTemplateServiceMonitorsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeTemplateTemplateServiceMonitors[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeTemplateTemplateServiceMonitorsOutputReference {
    return new MonitorTmpTkeTemplateTemplateServiceMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeTemplateTemplate {
  /**
  * Template description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#describe MonitorTmpTkeTemplate#describe}
  */
  readonly describe?: string;
  /**
  * Whether the system-supplied default template is used for outgoing references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#is_default MonitorTmpTkeTemplate#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Template dimensions, the following types are supported `instance` instance level, `cluster` cluster level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#level MonitorTmpTkeTemplate#level}
  */
  readonly level: string;
  /**
  * Template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#name MonitorTmpTkeTemplate#name}
  */
  readonly name: string;
  /**
  * The ID of the template, which is used for the outgoing reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#template_id MonitorTmpTkeTemplate#template_id}
  */
  readonly templateId?: string;
  /**
  * Last updated, for outgoing references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#update_time MonitorTmpTkeTemplate#update_time}
  */
  readonly updateTime?: string;
  /**
  * Whether the system-supplied default template is used for outgoing references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#version MonitorTmpTkeTemplate#version}
  */
  readonly version?: string;
  /**
  * pod_monitors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#pod_monitors MonitorTmpTkeTemplate#pod_monitors}
  */
  readonly podMonitors?: MonitorTmpTkeTemplateTemplatePodMonitors[] | cdktf.IResolvable;
  /**
  * raw_jobs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#raw_jobs MonitorTmpTkeTemplate#raw_jobs}
  */
  readonly rawJobs?: MonitorTmpTkeTemplateTemplateRawJobs[] | cdktf.IResolvable;
  /**
  * record_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#record_rules MonitorTmpTkeTemplate#record_rules}
  */
  readonly recordRules?: MonitorTmpTkeTemplateTemplateRecordRules[] | cdktf.IResolvable;
  /**
  * service_monitors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#service_monitors MonitorTmpTkeTemplate#service_monitors}
  */
  readonly serviceMonitors?: MonitorTmpTkeTemplateTemplateServiceMonitors[] | cdktf.IResolvable;
}

export function monitorTmpTkeTemplateTemplateToTerraform(struct?: MonitorTmpTkeTemplateTemplateOutputReference | MonitorTmpTkeTemplateTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    describe: cdktf.stringToTerraform(struct!.describe),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    level: cdktf.stringToTerraform(struct!.level),
    name: cdktf.stringToTerraform(struct!.name),
    template_id: cdktf.stringToTerraform(struct!.templateId),
    update_time: cdktf.stringToTerraform(struct!.updateTime),
    version: cdktf.stringToTerraform(struct!.version),
    pod_monitors: cdktf.listMapper(monitorTmpTkeTemplateTemplatePodMonitorsToTerraform, true)(struct!.podMonitors),
    raw_jobs: cdktf.listMapper(monitorTmpTkeTemplateTemplateRawJobsToTerraform, true)(struct!.rawJobs),
    record_rules: cdktf.listMapper(monitorTmpTkeTemplateTemplateRecordRulesToTerraform, true)(struct!.recordRules),
    service_monitors: cdktf.listMapper(monitorTmpTkeTemplateTemplateServiceMonitorsToTerraform, true)(struct!.serviceMonitors),
  }
}


export function monitorTmpTkeTemplateTemplateToHclTerraform(struct?: MonitorTmpTkeTemplateTemplateOutputReference | MonitorTmpTkeTemplateTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    describe: {
      value: cdktf.stringToHclTerraform(struct!.describe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_time: {
      value: cdktf.stringToHclTerraform(struct!.updateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_monitors: {
      value: cdktf.listMapperHcl(monitorTmpTkeTemplateTemplatePodMonitorsToHclTerraform, true)(struct!.podMonitors),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeTemplateTemplatePodMonitorsList",
    },
    raw_jobs: {
      value: cdktf.listMapperHcl(monitorTmpTkeTemplateTemplateRawJobsToHclTerraform, true)(struct!.rawJobs),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeTemplateTemplateRawJobsList",
    },
    record_rules: {
      value: cdktf.listMapperHcl(monitorTmpTkeTemplateTemplateRecordRulesToHclTerraform, true)(struct!.recordRules),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeTemplateTemplateRecordRulesList",
    },
    service_monitors: {
      value: cdktf.listMapperHcl(monitorTmpTkeTemplateTemplateServiceMonitorsToHclTerraform, true)(struct!.serviceMonitors),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorTmpTkeTemplateTemplateServiceMonitorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeTemplateTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorTmpTkeTemplateTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._describe !== undefined) {
      hasAnyValues = true;
      internalValueResult.describe = this._describe;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._updateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._podMonitors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMonitors = this._podMonitors?.internalValue;
    }
    if (this._rawJobs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawJobs = this._rawJobs?.internalValue;
    }
    if (this._recordRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRules = this._recordRules?.internalValue;
    }
    if (this._serviceMonitors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMonitors = this._serviceMonitors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeTemplateTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._describe = undefined;
      this._isDefault = undefined;
      this._level = undefined;
      this._name = undefined;
      this._templateId = undefined;
      this._updateTime = undefined;
      this._version = undefined;
      this._podMonitors.internalValue = undefined;
      this._rawJobs.internalValue = undefined;
      this._recordRules.internalValue = undefined;
      this._serviceMonitors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._describe = value.describe;
      this._isDefault = value.isDefault;
      this._level = value.level;
      this._name = value.name;
      this._templateId = value.templateId;
      this._updateTime = value.updateTime;
      this._version = value.version;
      this._podMonitors.internalValue = value.podMonitors;
      this._rawJobs.internalValue = value.rawJobs;
      this._recordRules.internalValue = value.recordRules;
      this._serviceMonitors.internalValue = value.serviceMonitors;
    }
  }

  // describe - computed: true, optional: true, required: false
  private _describe?: string; 
  public get describe() {
    return this.getStringAttribute('describe');
  }
  public set describe(value: string) {
    this._describe = value;
  }
  public resetDescribe() {
    this._describe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get describeInput() {
    return this._describe;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // update_time - computed: false, optional: true, required: false
  private _updateTime?: string; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // pod_monitors - computed: false, optional: true, required: false
  private _podMonitors = new MonitorTmpTkeTemplateTemplatePodMonitorsList(this, "pod_monitors", false);
  public get podMonitors() {
    return this._podMonitors;
  }
  public putPodMonitors(value: MonitorTmpTkeTemplateTemplatePodMonitors[] | cdktf.IResolvable) {
    this._podMonitors.internalValue = value;
  }
  public resetPodMonitors() {
    this._podMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMonitorsInput() {
    return this._podMonitors.internalValue;
  }

  // raw_jobs - computed: false, optional: true, required: false
  private _rawJobs = new MonitorTmpTkeTemplateTemplateRawJobsList(this, "raw_jobs", false);
  public get rawJobs() {
    return this._rawJobs;
  }
  public putRawJobs(value: MonitorTmpTkeTemplateTemplateRawJobs[] | cdktf.IResolvable) {
    this._rawJobs.internalValue = value;
  }
  public resetRawJobs() {
    this._rawJobs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawJobsInput() {
    return this._rawJobs.internalValue;
  }

  // record_rules - computed: false, optional: true, required: false
  private _recordRules = new MonitorTmpTkeTemplateTemplateRecordRulesList(this, "record_rules", false);
  public get recordRules() {
    return this._recordRules;
  }
  public putRecordRules(value: MonitorTmpTkeTemplateTemplateRecordRules[] | cdktf.IResolvable) {
    this._recordRules.internalValue = value;
  }
  public resetRecordRules() {
    this._recordRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRulesInput() {
    return this._recordRules.internalValue;
  }

  // service_monitors - computed: false, optional: true, required: false
  private _serviceMonitors = new MonitorTmpTkeTemplateTemplateServiceMonitorsList(this, "service_monitors", false);
  public get serviceMonitors() {
    return this._serviceMonitors;
  }
  public putServiceMonitors(value: MonitorTmpTkeTemplateTemplateServiceMonitors[] | cdktf.IResolvable) {
    this._serviceMonitors.internalValue = value;
  }
  public resetServiceMonitors() {
    this._serviceMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMonitorsInput() {
    return this._serviceMonitors.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template tencentcloud_monitor_tmp_tke_template}
*/
export class MonitorTmpTkeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_tmp_tke_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorTmpTkeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorTmpTkeTemplate to import
  * @param importFromId The id of the existing MonitorTmpTkeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorTmpTkeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_tmp_tke_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/monitor_tmp_tke_template tencentcloud_monitor_tmp_tke_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorTmpTkeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorTmpTkeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_tmp_tke_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._template.internalValue = config.template;
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

  // template - computed: false, optional: false, required: true
  private _template = new MonitorTmpTkeTemplateTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: MonitorTmpTkeTemplateTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      template: monitorTmpTkeTemplateTemplateToTerraform(this._template.internalValue),
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
      template: {
        value: monitorTmpTkeTemplateTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorTmpTkeTemplateTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
