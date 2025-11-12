// https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ByocIProjectSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#cloud_provider ByocIProjectSettings#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Instance type configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#instances ByocIProjectSettings#instances}
  */
  readonly instances: ByocIProjectSettingsInstances;
  /**
  * Private link enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#private_link_enabled ByocIProjectSettings#private_link_enabled}
  */
  readonly privateLinkEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#project_name ByocIProjectSettings#project_name}
  */
  readonly projectName: string;
  /**
  * AWS region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#region ByocIProjectSettings#region}
  */
  readonly region: string;
}
export interface ByocIProjectSettingsInstancesCore {
  /**
  * core VM instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#count ByocIProjectSettings#count}
  */
  readonly count: number;
  /**
  * Instance type for core virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#vm ByocIProjectSettings#vm}
  */
  readonly vm: string;
}

export function byocIProjectSettingsInstancesCoreToTerraform(struct?: ByocIProjectSettingsInstancesCore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    vm: cdktf.stringToTerraform(struct!.vm),
  }
}


export function byocIProjectSettingsInstancesCoreToHclTerraform(struct?: ByocIProjectSettingsInstancesCore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm: {
      value: cdktf.stringToHclTerraform(struct!.vm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocIProjectSettingsInstancesCoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocIProjectSettingsInstancesCore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._vm !== undefined) {
      hasAnyValues = true;
      internalValueResult.vm = this._vm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocIProjectSettingsInstancesCore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._vm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._vm = value.vm;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // vm - computed: false, optional: false, required: true
  private _vm?: string; 
  public get vm() {
    return this.getStringAttribute('vm');
  }
  public set vm(value: string) {
    this._vm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm;
  }
}
export interface ByocIProjectSettingsInstancesFundamental {
  /**
  * fundamental VM maximum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#max_count ByocIProjectSettings#max_count}
  */
  readonly maxCount: number;
  /**
  * fundamental VM minimum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#min_count ByocIProjectSettings#min_count}
  */
  readonly minCount: number;
  /**
  * Instance type for fundamental virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#vm ByocIProjectSettings#vm}
  */
  readonly vm: string;
}

export function byocIProjectSettingsInstancesFundamentalToTerraform(struct?: ByocIProjectSettingsInstancesFundamental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    vm: cdktf.stringToTerraform(struct!.vm),
  }
}


export function byocIProjectSettingsInstancesFundamentalToHclTerraform(struct?: ByocIProjectSettingsInstancesFundamental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm: {
      value: cdktf.stringToHclTerraform(struct!.vm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocIProjectSettingsInstancesFundamentalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocIProjectSettingsInstancesFundamental | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._vm !== undefined) {
      hasAnyValues = true;
      internalValueResult.vm = this._vm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocIProjectSettingsInstancesFundamental | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
      this._vm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
      this._vm = value.vm;
    }
  }

  // max_count - computed: false, optional: false, required: true
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: false, optional: false, required: true
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // vm - computed: false, optional: false, required: true
  private _vm?: string; 
  public get vm() {
    return this.getStringAttribute('vm');
  }
  public set vm(value: string) {
    this._vm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm;
  }
}
export interface ByocIProjectSettingsInstancesIndex {
  /**
  * index VM maximum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#max_count ByocIProjectSettings#max_count}
  */
  readonly maxCount: number;
  /**
  * index VM minimum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#min_count ByocIProjectSettings#min_count}
  */
  readonly minCount: number;
  /**
  * Instance type for index virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#vm ByocIProjectSettings#vm}
  */
  readonly vm: string;
}

export function byocIProjectSettingsInstancesIndexToTerraform(struct?: ByocIProjectSettingsInstancesIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    vm: cdktf.stringToTerraform(struct!.vm),
  }
}


export function byocIProjectSettingsInstancesIndexToHclTerraform(struct?: ByocIProjectSettingsInstancesIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm: {
      value: cdktf.stringToHclTerraform(struct!.vm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocIProjectSettingsInstancesIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocIProjectSettingsInstancesIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._vm !== undefined) {
      hasAnyValues = true;
      internalValueResult.vm = this._vm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocIProjectSettingsInstancesIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
      this._vm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
      this._vm = value.vm;
    }
  }

  // max_count - computed: false, optional: false, required: true
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: false, optional: false, required: true
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // vm - computed: false, optional: false, required: true
  private _vm?: string; 
  public get vm() {
    return this.getStringAttribute('vm');
  }
  public set vm(value: string) {
    this._vm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm;
  }
}
export interface ByocIProjectSettingsInstancesSearch {
  /**
  * search VM maximum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#max_count ByocIProjectSettings#max_count}
  */
  readonly maxCount: number;
  /**
  * search VM minimum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#min_count ByocIProjectSettings#min_count}
  */
  readonly minCount: number;
  /**
  * Instance type for search virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#vm ByocIProjectSettings#vm}
  */
  readonly vm: string;
}

export function byocIProjectSettingsInstancesSearchToTerraform(struct?: ByocIProjectSettingsInstancesSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    vm: cdktf.stringToTerraform(struct!.vm),
  }
}


export function byocIProjectSettingsInstancesSearchToHclTerraform(struct?: ByocIProjectSettingsInstancesSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm: {
      value: cdktf.stringToHclTerraform(struct!.vm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocIProjectSettingsInstancesSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocIProjectSettingsInstancesSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._vm !== undefined) {
      hasAnyValues = true;
      internalValueResult.vm = this._vm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocIProjectSettingsInstancesSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
      this._vm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
      this._vm = value.vm;
    }
  }

  // max_count - computed: false, optional: false, required: true
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: false, optional: false, required: true
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // vm - computed: false, optional: false, required: true
  private _vm?: string; 
  public get vm() {
    return this.getStringAttribute('vm');
  }
  public set vm(value: string) {
    this._vm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm;
  }
}
export interface ByocIProjectSettingsInstances {
  /**
  * Architecture type (X86 or ARM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#arch ByocIProjectSettings#arch}
  */
  readonly arch?: string;
  /**
  * Enable auto scaling for instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#auto_scaling ByocIProjectSettings#auto_scaling}
  */
  readonly autoScaling?: boolean | cdktf.IResolvable;
  /**
  * core VM configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#core ByocIProjectSettings#core}
  */
  readonly core: ByocIProjectSettingsInstancesCore;
  /**
  * fundamental VM configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#fundamental ByocIProjectSettings#fundamental}
  */
  readonly fundamental: ByocIProjectSettingsInstancesFundamental;
  /**
  * index VM configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#index ByocIProjectSettings#index}
  */
  readonly index: ByocIProjectSettingsInstancesIndex;
  /**
  * search VM configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#search ByocIProjectSettings#search}
  */
  readonly search: ByocIProjectSettingsInstancesSearch;
}

export function byocIProjectSettingsInstancesToTerraform(struct?: ByocIProjectSettingsInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    auto_scaling: cdktf.booleanToTerraform(struct!.autoScaling),
    core: byocIProjectSettingsInstancesCoreToTerraform(struct!.core),
    fundamental: byocIProjectSettingsInstancesFundamentalToTerraform(struct!.fundamental),
    index: byocIProjectSettingsInstancesIndexToTerraform(struct!.index),
    search: byocIProjectSettingsInstancesSearchToTerraform(struct!.search),
  }
}


export function byocIProjectSettingsInstancesToHclTerraform(struct?: ByocIProjectSettingsInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_scaling: {
      value: cdktf.booleanToHclTerraform(struct!.autoScaling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    core: {
      value: byocIProjectSettingsInstancesCoreToHclTerraform(struct!.core),
      isBlock: true,
      type: "struct",
      storageClassType: "ByocIProjectSettingsInstancesCore",
    },
    fundamental: {
      value: byocIProjectSettingsInstancesFundamentalToHclTerraform(struct!.fundamental),
      isBlock: true,
      type: "struct",
      storageClassType: "ByocIProjectSettingsInstancesFundamental",
    },
    index: {
      value: byocIProjectSettingsInstancesIndexToHclTerraform(struct!.index),
      isBlock: true,
      type: "struct",
      storageClassType: "ByocIProjectSettingsInstancesIndex",
    },
    search: {
      value: byocIProjectSettingsInstancesSearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "struct",
      storageClassType: "ByocIProjectSettingsInstancesSearch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocIProjectSettingsInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocIProjectSettingsInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._autoScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaling = this._autoScaling;
    }
    if (this._core?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.core = this._core?.internalValue;
    }
    if (this._fundamental?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fundamental = this._fundamental?.internalValue;
    }
    if (this._index?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocIProjectSettingsInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._autoScaling = undefined;
      this._core.internalValue = undefined;
      this._fundamental.internalValue = undefined;
      this._index.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._autoScaling = value.autoScaling;
      this._core.internalValue = value.core;
      this._fundamental.internalValue = value.fundamental;
      this._index.internalValue = value.index;
      this._search.internalValue = value.search;
    }
  }

  // arch - computed: true, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // auto_scaling - computed: true, optional: true, required: false
  private _autoScaling?: boolean | cdktf.IResolvable; 
  public get autoScaling() {
    return this.getBooleanAttribute('auto_scaling');
  }
  public set autoScaling(value: boolean | cdktf.IResolvable) {
    this._autoScaling = value;
  }
  public resetAutoScaling() {
    this._autoScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling;
  }

  // core - computed: false, optional: false, required: true
  private _core = new ByocIProjectSettingsInstancesCoreOutputReference(this, "core");
  public get core() {
    return this._core;
  }
  public putCore(value: ByocIProjectSettingsInstancesCore) {
    this._core.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInput() {
    return this._core.internalValue;
  }

  // fundamental - computed: false, optional: false, required: true
  private _fundamental = new ByocIProjectSettingsInstancesFundamentalOutputReference(this, "fundamental");
  public get fundamental() {
    return this._fundamental;
  }
  public putFundamental(value: ByocIProjectSettingsInstancesFundamental) {
    this._fundamental.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fundamentalInput() {
    return this._fundamental.internalValue;
  }

  // index - computed: false, optional: false, required: true
  private _index = new ByocIProjectSettingsInstancesIndexOutputReference(this, "index");
  public get index() {
    return this._index;
  }
  public putIndex(value: ByocIProjectSettingsInstancesIndex) {
    this._index.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index.internalValue;
  }

  // search - computed: false, optional: false, required: true
  private _search = new ByocIProjectSettingsInstancesSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: ByocIProjectSettingsInstancesSearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface ByocIProjectSettingsNodeQuotasCore {
}

export function byocIProjectSettingsNodeQuotasCoreToTerraform(struct?: ByocIProjectSettingsNodeQuotasCore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function byocIProjectSettingsNodeQuotasCoreToHclTerraform(struct?: ByocIProjectSettingsNodeQuotasCore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ByocIProjectSettingsNodeQuotasCoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocIProjectSettingsNodeQuotasCore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocIProjectSettingsNodeQuotasCore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_type - computed: true, optional: false, required: false
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // desired_size - computed: true, optional: false, required: false
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getStringAttribute('instance_types');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}
export interface ByocIProjectSettingsNodeQuotasFundamental {
}

export function byocIProjectSettingsNodeQuotasFundamentalToTerraform(struct?: ByocIProjectSettingsNodeQuotasFundamental): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function byocIProjectSettingsNodeQuotasFundamentalToHclTerraform(struct?: ByocIProjectSettingsNodeQuotasFundamental): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ByocIProjectSettingsNodeQuotasFundamentalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocIProjectSettingsNodeQuotasFundamental | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocIProjectSettingsNodeQuotasFundamental | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_type - computed: true, optional: false, required: false
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // desired_size - computed: true, optional: false, required: false
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getStringAttribute('instance_types');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}
export interface ByocIProjectSettingsNodeQuotasIndex {
}

export function byocIProjectSettingsNodeQuotasIndexToTerraform(struct?: ByocIProjectSettingsNodeQuotasIndex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function byocIProjectSettingsNodeQuotasIndexToHclTerraform(struct?: ByocIProjectSettingsNodeQuotasIndex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ByocIProjectSettingsNodeQuotasIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocIProjectSettingsNodeQuotasIndex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocIProjectSettingsNodeQuotasIndex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_type - computed: true, optional: false, required: false
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // desired_size - computed: true, optional: false, required: false
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getStringAttribute('instance_types');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}
export interface ByocIProjectSettingsNodeQuotasSearch {
}

export function byocIProjectSettingsNodeQuotasSearchToTerraform(struct?: ByocIProjectSettingsNodeQuotasSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function byocIProjectSettingsNodeQuotasSearchToHclTerraform(struct?: ByocIProjectSettingsNodeQuotasSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ByocIProjectSettingsNodeQuotasSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocIProjectSettingsNodeQuotasSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocIProjectSettingsNodeQuotasSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_type - computed: true, optional: false, required: false
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // desired_size - computed: true, optional: false, required: false
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getStringAttribute('instance_types');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}
export interface ByocIProjectSettingsNodeQuotas {
}

export function byocIProjectSettingsNodeQuotasToTerraform(struct?: ByocIProjectSettingsNodeQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function byocIProjectSettingsNodeQuotasToHclTerraform(struct?: ByocIProjectSettingsNodeQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ByocIProjectSettingsNodeQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocIProjectSettingsNodeQuotas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocIProjectSettingsNodeQuotas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core - computed: true, optional: false, required: false
  private _core = new ByocIProjectSettingsNodeQuotasCoreOutputReference(this, "core");
  public get core() {
    return this._core;
  }

  // fundamental - computed: true, optional: false, required: false
  private _fundamental = new ByocIProjectSettingsNodeQuotasFundamentalOutputReference(this, "fundamental");
  public get fundamental() {
    return this._fundamental;
  }

  // index - computed: true, optional: false, required: false
  private _index = new ByocIProjectSettingsNodeQuotasIndexOutputReference(this, "index");
  public get index() {
    return this._index;
  }

  // search - computed: true, optional: false, required: false
  private _search = new ByocIProjectSettingsNodeQuotasSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
}
export interface ByocIProjectSettingsOpConfig {
}

export function byocIProjectSettingsOpConfigToTerraform(struct?: ByocIProjectSettingsOpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function byocIProjectSettingsOpConfigToHclTerraform(struct?: ByocIProjectSettingsOpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ByocIProjectSettingsOpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocIProjectSettingsOpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocIProjectSettingsOpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_image_url - computed: true, optional: false, required: false
  public get agentImageUrl() {
    return this.getStringAttribute('agent_image_url');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings zillizcloud_byoc_i_project_settings}
*/
export class ByocIProjectSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zillizcloud_byoc_i_project_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ByocIProjectSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ByocIProjectSettings to import
  * @param importFromId The id of the existing ByocIProjectSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ByocIProjectSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zillizcloud_byoc_i_project_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_i_project_settings zillizcloud_byoc_i_project_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ByocIProjectSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ByocIProjectSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'zillizcloud_byoc_i_project_settings',
      terraformGeneratorMetadata: {
        providerName: 'zillizcloud',
        providerVersion: '0.6.23',
        providerVersionConstraint: '0.6.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._instances.internalValue = config.instances;
    this._privateLinkEnabled = config.privateLinkEnabled;
    this._projectName = config.projectName;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // data_plane_id - computed: true, optional: false, required: false
  public get dataPlaneId() {
    return this.getStringAttribute('data_plane_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new ByocIProjectSettingsInstancesOutputReference(this, "instances");
  public get instances() {
    return this._instances;
  }
  public putInstances(value: ByocIProjectSettingsInstances) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // node_quotas - computed: true, optional: false, required: false
  private _nodeQuotas = new ByocIProjectSettingsNodeQuotasOutputReference(this, "node_quotas");
  public get nodeQuotas() {
    return this._nodeQuotas;
  }

  // op_config - computed: true, optional: false, required: false
  private _opConfig = new ByocIProjectSettingsOpConfigOutputReference(this, "op_config");
  public get opConfig() {
    return this._opConfig;
  }

  // private_link_enabled - computed: true, optional: true, required: false
  private _privateLinkEnabled?: boolean | cdktf.IResolvable; 
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled');
  }
  public set privateLinkEnabled(value: boolean | cdktf.IResolvable) {
    this._privateLinkEnabled = value;
  }
  public resetPrivateLinkEnabled() {
    this._privateLinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEnabledInput() {
    return this._privateLinkEnabled;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      instances: byocIProjectSettingsInstancesToTerraform(this._instances.internalValue),
      private_link_enabled: cdktf.booleanToTerraform(this._privateLinkEnabled),
      project_name: cdktf.stringToTerraform(this._projectName),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instances: {
        value: byocIProjectSettingsInstancesToHclTerraform(this._instances.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ByocIProjectSettingsInstances",
      },
      private_link_enabled: {
        value: cdktf.booleanToHclTerraform(this._privateLinkEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
