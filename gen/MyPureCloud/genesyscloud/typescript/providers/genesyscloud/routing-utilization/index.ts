// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingUtilizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#id RoutingUtilization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#call RoutingUtilization#call}
  */
  readonly call?: RoutingUtilizationCall;
  /**
  * callback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#callback RoutingUtilization#callback}
  */
  readonly callback?: RoutingUtilizationCallback;
  /**
  * chat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#chat RoutingUtilization#chat}
  */
  readonly chat?: RoutingUtilizationChat;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#email RoutingUtilization#email}
  */
  readonly email?: RoutingUtilizationEmail;
  /**
  * label_utilizations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#label_utilizations RoutingUtilization#label_utilizations}
  */
  readonly labelUtilizations?: RoutingUtilizationLabelUtilizations[] | cdktf.IResolvable;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#message RoutingUtilization#message}
  */
  readonly message?: RoutingUtilizationMessage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#timeouts RoutingUtilization#timeouts}
  */
  readonly timeouts?: RoutingUtilizationTimeouts;
}
export interface RoutingUtilizationCall {
  /**
  * Block this media type when on a non-ACD conversation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#include_non_acd RoutingUtilization#include_non_acd}
  */
  readonly includeNonAcd?: boolean | cdktf.IResolvable;
  /**
  * Set of other media types that can interrupt this media type (call | callback | chat | email | message).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#interruptible_media_types RoutingUtilization#interruptible_media_types}
  */
  readonly interruptibleMediaTypes?: string[];
  /**
  * Maximum capacity of conversations of this media type. Value must be between 0 and 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#maximum_capacity RoutingUtilization#maximum_capacity}
  */
  readonly maximumCapacity: number;
}

export function routingUtilizationCallToTerraform(struct?: RoutingUtilizationCallOutputReference | RoutingUtilizationCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_non_acd: cdktf.booleanToTerraform(struct!.includeNonAcd),
    interruptible_media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptibleMediaTypes),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function routingUtilizationCallToHclTerraform(struct?: RoutingUtilizationCallOutputReference | RoutingUtilizationCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_non_acd: {
      value: cdktf.booleanToHclTerraform(struct!.includeNonAcd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interruptible_media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptibleMediaTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingUtilizationCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingUtilizationCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNonAcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNonAcd = this._includeNonAcd;
    }
    if (this._interruptibleMediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptibleMediaTypes = this._interruptibleMediaTypes;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingUtilizationCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeNonAcd = undefined;
      this._interruptibleMediaTypes = undefined;
      this._maximumCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeNonAcd = value.includeNonAcd;
      this._interruptibleMediaTypes = value.interruptibleMediaTypes;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // include_non_acd - computed: false, optional: true, required: false
  private _includeNonAcd?: boolean | cdktf.IResolvable; 
  public get includeNonAcd() {
    return this.getBooleanAttribute('include_non_acd');
  }
  public set includeNonAcd(value: boolean | cdktf.IResolvable) {
    this._includeNonAcd = value;
  }
  public resetIncludeNonAcd() {
    this._includeNonAcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonAcdInput() {
    return this._includeNonAcd;
  }

  // interruptible_media_types - computed: false, optional: true, required: false
  private _interruptibleMediaTypes?: string[]; 
  public get interruptibleMediaTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('interruptible_media_types'));
  }
  public set interruptibleMediaTypes(value: string[]) {
    this._interruptibleMediaTypes = value;
  }
  public resetInterruptibleMediaTypes() {
    this._interruptibleMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptibleMediaTypesInput() {
    return this._interruptibleMediaTypes;
  }

  // maximum_capacity - computed: false, optional: false, required: true
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}
export interface RoutingUtilizationCallback {
  /**
  * Block this media type when on a non-ACD conversation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#include_non_acd RoutingUtilization#include_non_acd}
  */
  readonly includeNonAcd?: boolean | cdktf.IResolvable;
  /**
  * Set of other media types that can interrupt this media type (call | callback | chat | email | message).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#interruptible_media_types RoutingUtilization#interruptible_media_types}
  */
  readonly interruptibleMediaTypes?: string[];
  /**
  * Maximum capacity of conversations of this media type. Value must be between 0 and 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#maximum_capacity RoutingUtilization#maximum_capacity}
  */
  readonly maximumCapacity: number;
}

export function routingUtilizationCallbackToTerraform(struct?: RoutingUtilizationCallbackOutputReference | RoutingUtilizationCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_non_acd: cdktf.booleanToTerraform(struct!.includeNonAcd),
    interruptible_media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptibleMediaTypes),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function routingUtilizationCallbackToHclTerraform(struct?: RoutingUtilizationCallbackOutputReference | RoutingUtilizationCallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_non_acd: {
      value: cdktf.booleanToHclTerraform(struct!.includeNonAcd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interruptible_media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptibleMediaTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingUtilizationCallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingUtilizationCallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNonAcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNonAcd = this._includeNonAcd;
    }
    if (this._interruptibleMediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptibleMediaTypes = this._interruptibleMediaTypes;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingUtilizationCallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeNonAcd = undefined;
      this._interruptibleMediaTypes = undefined;
      this._maximumCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeNonAcd = value.includeNonAcd;
      this._interruptibleMediaTypes = value.interruptibleMediaTypes;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // include_non_acd - computed: false, optional: true, required: false
  private _includeNonAcd?: boolean | cdktf.IResolvable; 
  public get includeNonAcd() {
    return this.getBooleanAttribute('include_non_acd');
  }
  public set includeNonAcd(value: boolean | cdktf.IResolvable) {
    this._includeNonAcd = value;
  }
  public resetIncludeNonAcd() {
    this._includeNonAcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonAcdInput() {
    return this._includeNonAcd;
  }

  // interruptible_media_types - computed: false, optional: true, required: false
  private _interruptibleMediaTypes?: string[]; 
  public get interruptibleMediaTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('interruptible_media_types'));
  }
  public set interruptibleMediaTypes(value: string[]) {
    this._interruptibleMediaTypes = value;
  }
  public resetInterruptibleMediaTypes() {
    this._interruptibleMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptibleMediaTypesInput() {
    return this._interruptibleMediaTypes;
  }

  // maximum_capacity - computed: false, optional: false, required: true
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}
export interface RoutingUtilizationChat {
  /**
  * Block this media type when on a non-ACD conversation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#include_non_acd RoutingUtilization#include_non_acd}
  */
  readonly includeNonAcd?: boolean | cdktf.IResolvable;
  /**
  * Set of other media types that can interrupt this media type (call | callback | chat | email | message).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#interruptible_media_types RoutingUtilization#interruptible_media_types}
  */
  readonly interruptibleMediaTypes?: string[];
  /**
  * Maximum capacity of conversations of this media type. Value must be between 0 and 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#maximum_capacity RoutingUtilization#maximum_capacity}
  */
  readonly maximumCapacity: number;
}

export function routingUtilizationChatToTerraform(struct?: RoutingUtilizationChatOutputReference | RoutingUtilizationChat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_non_acd: cdktf.booleanToTerraform(struct!.includeNonAcd),
    interruptible_media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptibleMediaTypes),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function routingUtilizationChatToHclTerraform(struct?: RoutingUtilizationChatOutputReference | RoutingUtilizationChat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_non_acd: {
      value: cdktf.booleanToHclTerraform(struct!.includeNonAcd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interruptible_media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptibleMediaTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingUtilizationChatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingUtilizationChat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNonAcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNonAcd = this._includeNonAcd;
    }
    if (this._interruptibleMediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptibleMediaTypes = this._interruptibleMediaTypes;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingUtilizationChat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeNonAcd = undefined;
      this._interruptibleMediaTypes = undefined;
      this._maximumCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeNonAcd = value.includeNonAcd;
      this._interruptibleMediaTypes = value.interruptibleMediaTypes;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // include_non_acd - computed: false, optional: true, required: false
  private _includeNonAcd?: boolean | cdktf.IResolvable; 
  public get includeNonAcd() {
    return this.getBooleanAttribute('include_non_acd');
  }
  public set includeNonAcd(value: boolean | cdktf.IResolvable) {
    this._includeNonAcd = value;
  }
  public resetIncludeNonAcd() {
    this._includeNonAcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonAcdInput() {
    return this._includeNonAcd;
  }

  // interruptible_media_types - computed: false, optional: true, required: false
  private _interruptibleMediaTypes?: string[]; 
  public get interruptibleMediaTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('interruptible_media_types'));
  }
  public set interruptibleMediaTypes(value: string[]) {
    this._interruptibleMediaTypes = value;
  }
  public resetInterruptibleMediaTypes() {
    this._interruptibleMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptibleMediaTypesInput() {
    return this._interruptibleMediaTypes;
  }

  // maximum_capacity - computed: false, optional: false, required: true
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}
export interface RoutingUtilizationEmail {
  /**
  * Block this media type when on a non-ACD conversation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#include_non_acd RoutingUtilization#include_non_acd}
  */
  readonly includeNonAcd?: boolean | cdktf.IResolvable;
  /**
  * Set of other media types that can interrupt this media type (call | callback | chat | email | message).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#interruptible_media_types RoutingUtilization#interruptible_media_types}
  */
  readonly interruptibleMediaTypes?: string[];
  /**
  * Maximum capacity of conversations of this media type. Value must be between 0 and 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#maximum_capacity RoutingUtilization#maximum_capacity}
  */
  readonly maximumCapacity: number;
}

export function routingUtilizationEmailToTerraform(struct?: RoutingUtilizationEmailOutputReference | RoutingUtilizationEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_non_acd: cdktf.booleanToTerraform(struct!.includeNonAcd),
    interruptible_media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptibleMediaTypes),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function routingUtilizationEmailToHclTerraform(struct?: RoutingUtilizationEmailOutputReference | RoutingUtilizationEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_non_acd: {
      value: cdktf.booleanToHclTerraform(struct!.includeNonAcd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interruptible_media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptibleMediaTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingUtilizationEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingUtilizationEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNonAcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNonAcd = this._includeNonAcd;
    }
    if (this._interruptibleMediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptibleMediaTypes = this._interruptibleMediaTypes;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingUtilizationEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeNonAcd = undefined;
      this._interruptibleMediaTypes = undefined;
      this._maximumCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeNonAcd = value.includeNonAcd;
      this._interruptibleMediaTypes = value.interruptibleMediaTypes;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // include_non_acd - computed: false, optional: true, required: false
  private _includeNonAcd?: boolean | cdktf.IResolvable; 
  public get includeNonAcd() {
    return this.getBooleanAttribute('include_non_acd');
  }
  public set includeNonAcd(value: boolean | cdktf.IResolvable) {
    this._includeNonAcd = value;
  }
  public resetIncludeNonAcd() {
    this._includeNonAcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonAcdInput() {
    return this._includeNonAcd;
  }

  // interruptible_media_types - computed: false, optional: true, required: false
  private _interruptibleMediaTypes?: string[]; 
  public get interruptibleMediaTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('interruptible_media_types'));
  }
  public set interruptibleMediaTypes(value: string[]) {
    this._interruptibleMediaTypes = value;
  }
  public resetInterruptibleMediaTypes() {
    this._interruptibleMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptibleMediaTypesInput() {
    return this._interruptibleMediaTypes;
  }

  // maximum_capacity - computed: false, optional: false, required: true
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}
export interface RoutingUtilizationLabelUtilizations {
  /**
  * Set of other labels that can interrupt this label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#interrupting_label_ids RoutingUtilization#interrupting_label_ids}
  */
  readonly interruptingLabelIds?: string[];
  /**
  * Id of the label being configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#label_id RoutingUtilization#label_id}
  */
  readonly labelId: string;
  /**
  * Maximum capacity of conversations with this label. Value must be between 0 and 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#maximum_capacity RoutingUtilization#maximum_capacity}
  */
  readonly maximumCapacity: number;
}

export function routingUtilizationLabelUtilizationsToTerraform(struct?: RoutingUtilizationLabelUtilizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interrupting_label_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptingLabelIds),
    label_id: cdktf.stringToTerraform(struct!.labelId),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function routingUtilizationLabelUtilizationsToHclTerraform(struct?: RoutingUtilizationLabelUtilizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interrupting_label_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptingLabelIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    label_id: {
      value: cdktf.stringToHclTerraform(struct!.labelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingUtilizationLabelUtilizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoutingUtilizationLabelUtilizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interruptingLabelIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptingLabelIds = this._interruptingLabelIds;
    }
    if (this._labelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelId = this._labelId;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingUtilizationLabelUtilizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interruptingLabelIds = undefined;
      this._labelId = undefined;
      this._maximumCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interruptingLabelIds = value.interruptingLabelIds;
      this._labelId = value.labelId;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // interrupting_label_ids - computed: false, optional: true, required: false
  private _interruptingLabelIds?: string[]; 
  public get interruptingLabelIds() {
    return cdktf.Fn.tolist(this.getListAttribute('interrupting_label_ids'));
  }
  public set interruptingLabelIds(value: string[]) {
    this._interruptingLabelIds = value;
  }
  public resetInterruptingLabelIds() {
    this._interruptingLabelIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptingLabelIdsInput() {
    return this._interruptingLabelIds;
  }

  // label_id - computed: false, optional: false, required: true
  private _labelId?: string; 
  public get labelId() {
    return this.getStringAttribute('label_id');
  }
  public set labelId(value: string) {
    this._labelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelIdInput() {
    return this._labelId;
  }

  // maximum_capacity - computed: false, optional: false, required: true
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}

export class RoutingUtilizationLabelUtilizationsList extends cdktf.ComplexList {
  public internalValue? : RoutingUtilizationLabelUtilizations[] | cdktf.IResolvable

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
  public get(index: number): RoutingUtilizationLabelUtilizationsOutputReference {
    return new RoutingUtilizationLabelUtilizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoutingUtilizationMessage {
  /**
  * Block this media type when on a non-ACD conversation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#include_non_acd RoutingUtilization#include_non_acd}
  */
  readonly includeNonAcd?: boolean | cdktf.IResolvable;
  /**
  * Set of other media types that can interrupt this media type (call | callback | chat | email | message).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#interruptible_media_types RoutingUtilization#interruptible_media_types}
  */
  readonly interruptibleMediaTypes?: string[];
  /**
  * Maximum capacity of conversations of this media type. Value must be between 0 and 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#maximum_capacity RoutingUtilization#maximum_capacity}
  */
  readonly maximumCapacity: number;
}

export function routingUtilizationMessageToTerraform(struct?: RoutingUtilizationMessageOutputReference | RoutingUtilizationMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_non_acd: cdktf.booleanToTerraform(struct!.includeNonAcd),
    interruptible_media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interruptibleMediaTypes),
    maximum_capacity: cdktf.numberToTerraform(struct!.maximumCapacity),
  }
}


export function routingUtilizationMessageToHclTerraform(struct?: RoutingUtilizationMessageOutputReference | RoutingUtilizationMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_non_acd: {
      value: cdktf.booleanToHclTerraform(struct!.includeNonAcd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interruptible_media_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interruptibleMediaTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    maximum_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maximumCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoutingUtilizationMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoutingUtilizationMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNonAcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNonAcd = this._includeNonAcd;
    }
    if (this._interruptibleMediaTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.interruptibleMediaTypes = this._interruptibleMediaTypes;
    }
    if (this._maximumCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumCapacity = this._maximumCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingUtilizationMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeNonAcd = undefined;
      this._interruptibleMediaTypes = undefined;
      this._maximumCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeNonAcd = value.includeNonAcd;
      this._interruptibleMediaTypes = value.interruptibleMediaTypes;
      this._maximumCapacity = value.maximumCapacity;
    }
  }

  // include_non_acd - computed: false, optional: true, required: false
  private _includeNonAcd?: boolean | cdktf.IResolvable; 
  public get includeNonAcd() {
    return this.getBooleanAttribute('include_non_acd');
  }
  public set includeNonAcd(value: boolean | cdktf.IResolvable) {
    this._includeNonAcd = value;
  }
  public resetIncludeNonAcd() {
    this._includeNonAcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonAcdInput() {
    return this._includeNonAcd;
  }

  // interruptible_media_types - computed: false, optional: true, required: false
  private _interruptibleMediaTypes?: string[]; 
  public get interruptibleMediaTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('interruptible_media_types'));
  }
  public set interruptibleMediaTypes(value: string[]) {
    this._interruptibleMediaTypes = value;
  }
  public resetInterruptibleMediaTypes() {
    this._interruptibleMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interruptibleMediaTypesInput() {
    return this._interruptibleMediaTypes;
  }

  // maximum_capacity - computed: false, optional: false, required: true
  private _maximumCapacity?: number; 
  public get maximumCapacity() {
    return this.getNumberAttribute('maximum_capacity');
  }
  public set maximumCapacity(value: number) {
    this._maximumCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity;
  }
}
export interface RoutingUtilizationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#read RoutingUtilization#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#update RoutingUtilization#update}
  */
  readonly update?: string;
}

export function routingUtilizationTimeoutsToTerraform(struct?: RoutingUtilizationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function routingUtilizationTimeoutsToHclTerraform(struct?: RoutingUtilizationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class RoutingUtilizationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoutingUtilizationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoutingUtilizationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization genesyscloud_routing_utilization}
*/
export class RoutingUtilization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_routing_utilization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingUtilization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingUtilization to import
  * @param importFromId The id of the existing RoutingUtilization that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingUtilization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_routing_utilization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/routing_utilization genesyscloud_routing_utilization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingUtilizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RoutingUtilizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_routing_utilization',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
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
    this._call.internalValue = config.call;
    this._callback.internalValue = config.callback;
    this._chat.internalValue = config.chat;
    this._email.internalValue = config.email;
    this._labelUtilizations.internalValue = config.labelUtilizations;
    this._message.internalValue = config.message;
    this._timeouts.internalValue = config.timeouts;
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

  // call - computed: false, optional: true, required: false
  private _call = new RoutingUtilizationCallOutputReference(this, "call");
  public get call() {
    return this._call;
  }
  public putCall(value: RoutingUtilizationCall) {
    this._call.internalValue = value;
  }
  public resetCall() {
    this._call.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callInput() {
    return this._call.internalValue;
  }

  // callback - computed: false, optional: true, required: false
  private _callback = new RoutingUtilizationCallbackOutputReference(this, "callback");
  public get callback() {
    return this._callback;
  }
  public putCallback(value: RoutingUtilizationCallback) {
    this._callback.internalValue = value;
  }
  public resetCallback() {
    this._callback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackInput() {
    return this._callback.internalValue;
  }

  // chat - computed: false, optional: true, required: false
  private _chat = new RoutingUtilizationChatOutputReference(this, "chat");
  public get chat() {
    return this._chat;
  }
  public putChat(value: RoutingUtilizationChat) {
    this._chat.internalValue = value;
  }
  public resetChat() {
    this._chat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatInput() {
    return this._chat.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new RoutingUtilizationEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: RoutingUtilizationEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // label_utilizations - computed: false, optional: true, required: false
  private _labelUtilizations = new RoutingUtilizationLabelUtilizationsList(this, "label_utilizations", false);
  public get labelUtilizations() {
    return this._labelUtilizations;
  }
  public putLabelUtilizations(value: RoutingUtilizationLabelUtilizations[] | cdktf.IResolvable) {
    this._labelUtilizations.internalValue = value;
  }
  public resetLabelUtilizations() {
    this._labelUtilizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelUtilizationsInput() {
    return this._labelUtilizations.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message = new RoutingUtilizationMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }
  public putMessage(value: RoutingUtilizationMessage) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RoutingUtilizationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RoutingUtilizationTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      call: routingUtilizationCallToTerraform(this._call.internalValue),
      callback: routingUtilizationCallbackToTerraform(this._callback.internalValue),
      chat: routingUtilizationChatToTerraform(this._chat.internalValue),
      email: routingUtilizationEmailToTerraform(this._email.internalValue),
      label_utilizations: cdktf.listMapper(routingUtilizationLabelUtilizationsToTerraform, true)(this._labelUtilizations.internalValue),
      message: routingUtilizationMessageToTerraform(this._message.internalValue),
      timeouts: routingUtilizationTimeoutsToTerraform(this._timeouts.internalValue),
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
      call: {
        value: routingUtilizationCallToHclTerraform(this._call.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingUtilizationCallList",
      },
      callback: {
        value: routingUtilizationCallbackToHclTerraform(this._callback.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingUtilizationCallbackList",
      },
      chat: {
        value: routingUtilizationChatToHclTerraform(this._chat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingUtilizationChatList",
      },
      email: {
        value: routingUtilizationEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingUtilizationEmailList",
      },
      label_utilizations: {
        value: cdktf.listMapperHcl(routingUtilizationLabelUtilizationsToHclTerraform, true)(this._labelUtilizations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingUtilizationLabelUtilizationsList",
      },
      message: {
        value: routingUtilizationMessageToHclTerraform(this._message.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoutingUtilizationMessageList",
      },
      timeouts: {
        value: routingUtilizationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoutingUtilizationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
