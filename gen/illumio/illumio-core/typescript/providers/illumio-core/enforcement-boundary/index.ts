// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnforcementBoundaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enabled flag. Determines whether the rule will be enabled in ruleset or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#enabled EnforcementBoundary#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#id EnforcementBoundary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Enforcement Boundary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#name EnforcementBoundary#name}
  */
  readonly name: string;
  /**
  * consumers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#consumers EnforcementBoundary#consumers}
  */
  readonly consumers: EnforcementBoundaryConsumers[] | cdktf.IResolvable;
  /**
  * ingress_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#ingress_services EnforcementBoundary#ingress_services}
  */
  readonly ingressServices: EnforcementBoundaryIngressServices[] | cdktf.IResolvable;
  /**
  * providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#providers EnforcementBoundary#providers}
  */
  readonly providers: EnforcementBoundaryProviders[] | cdktf.IResolvable;
}
export interface EnforcementBoundaryConsumersIpListStruct {
  /**
  * URI of IP List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#href EnforcementBoundary#href}
  */
  readonly href: string;
}

export function enforcementBoundaryConsumersIpListStructToTerraform(struct?: EnforcementBoundaryConsumersIpListStructOutputReference | EnforcementBoundaryConsumersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function enforcementBoundaryConsumersIpListStructToHclTerraform(struct?: EnforcementBoundaryConsumersIpListStructOutputReference | EnforcementBoundaryConsumersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementBoundaryConsumersIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnforcementBoundaryConsumersIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementBoundaryConsumersIpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface EnforcementBoundaryConsumersLabel {
  /**
  * URI of Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#href EnforcementBoundary#href}
  */
  readonly href: string;
}

export function enforcementBoundaryConsumersLabelToTerraform(struct?: EnforcementBoundaryConsumersLabelOutputReference | EnforcementBoundaryConsumersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function enforcementBoundaryConsumersLabelToHclTerraform(struct?: EnforcementBoundaryConsumersLabelOutputReference | EnforcementBoundaryConsumersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementBoundaryConsumersLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnforcementBoundaryConsumersLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementBoundaryConsumersLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface EnforcementBoundaryConsumersLabelGroup {
  /**
  * URI of Label Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#href EnforcementBoundary#href}
  */
  readonly href: string;
}

export function enforcementBoundaryConsumersLabelGroupToTerraform(struct?: EnforcementBoundaryConsumersLabelGroupOutputReference | EnforcementBoundaryConsumersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function enforcementBoundaryConsumersLabelGroupToHclTerraform(struct?: EnforcementBoundaryConsumersLabelGroupOutputReference | EnforcementBoundaryConsumersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementBoundaryConsumersLabelGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnforcementBoundaryConsumersLabelGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementBoundaryConsumersLabelGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface EnforcementBoundaryConsumers {
  /**
  * actors for consumers parameter. Allowed values is "ams"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#actors EnforcementBoundary#actors}
  */
  readonly actors?: string;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#ip_list EnforcementBoundary#ip_list}
  */
  readonly ipList?: EnforcementBoundaryConsumersIpListStruct;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#label EnforcementBoundary#label}
  */
  readonly label?: EnforcementBoundaryConsumersLabel;
  /**
  * label_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#label_group EnforcementBoundary#label_group}
  */
  readonly labelGroup?: EnforcementBoundaryConsumersLabelGroup;
}

export function enforcementBoundaryConsumersToTerraform(struct?: EnforcementBoundaryConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actors: cdktf.stringToTerraform(struct!.actors),
    ip_list: enforcementBoundaryConsumersIpListStructToTerraform(struct!.ipList),
    label: enforcementBoundaryConsumersLabelToTerraform(struct!.label),
    label_group: enforcementBoundaryConsumersLabelGroupToTerraform(struct!.labelGroup),
  }
}


export function enforcementBoundaryConsumersToHclTerraform(struct?: EnforcementBoundaryConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actors: {
      value: cdktf.stringToHclTerraform(struct!.actors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_list: {
      value: enforcementBoundaryConsumersIpListStructToHclTerraform(struct!.ipList),
      isBlock: true,
      type: "set",
      storageClassType: "EnforcementBoundaryConsumersIpListStructList",
    },
    label: {
      value: enforcementBoundaryConsumersLabelToHclTerraform(struct!.label),
      isBlock: true,
      type: "set",
      storageClassType: "EnforcementBoundaryConsumersLabelList",
    },
    label_group: {
      value: enforcementBoundaryConsumersLabelGroupToHclTerraform(struct!.labelGroup),
      isBlock: true,
      type: "set",
      storageClassType: "EnforcementBoundaryConsumersLabelGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementBoundaryConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcementBoundaryConsumers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actors !== undefined) {
      hasAnyValues = true;
      internalValueResult.actors = this._actors;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._labelGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelGroup = this._labelGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementBoundaryConsumers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actors = undefined;
      this._ipList.internalValue = undefined;
      this._label.internalValue = undefined;
      this._labelGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actors = value.actors;
      this._ipList.internalValue = value.ipList;
      this._label.internalValue = value.label;
      this._labelGroup.internalValue = value.labelGroup;
    }
  }

  // actors - computed: false, optional: true, required: false
  private _actors?: string; 
  public get actors() {
    return this.getStringAttribute('actors');
  }
  public set actors(value: string) {
    this._actors = value;
  }
  public resetActors() {
    this._actors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorsInput() {
    return this._actors;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new EnforcementBoundaryConsumersIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: EnforcementBoundaryConsumersIpListStruct) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new EnforcementBoundaryConsumersLabelOutputReference(this, "label");
  public get label() {
    return this._label;
  }
  public putLabel(value: EnforcementBoundaryConsumersLabel) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // label_group - computed: false, optional: true, required: false
  private _labelGroup = new EnforcementBoundaryConsumersLabelGroupOutputReference(this, "label_group");
  public get labelGroup() {
    return this._labelGroup;
  }
  public putLabelGroup(value: EnforcementBoundaryConsumersLabelGroup) {
    this._labelGroup.internalValue = value;
  }
  public resetLabelGroup() {
    this._labelGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelGroupInput() {
    return this._labelGroup.internalValue;
  }
}

export class EnforcementBoundaryConsumersList extends cdktf.ComplexList {
  public internalValue? : EnforcementBoundaryConsumers[] | cdktf.IResolvable

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
  public get(index: number): EnforcementBoundaryConsumersOutputReference {
    return new EnforcementBoundaryConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnforcementBoundaryIngressServices {
  /**
  * URI of Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#href EnforcementBoundary#href}
  */
  readonly href?: string;
  /**
  * Port number used with protocol or starting port when specifying a range. Allowed range is 0-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#port EnforcementBoundary#port}
  */
  readonly port?: string;
  /**
  * Protocol number. Allowed values are 6 (TCP) and 17 (UDP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#proto EnforcementBoundary#proto}
  */
  readonly proto?: string;
  /**
  * Upper end of port range. Allowed range is 0-65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#to_port EnforcementBoundary#to_port}
  */
  readonly toPort?: string;
}

export function enforcementBoundaryIngressServicesToTerraform(struct?: EnforcementBoundaryIngressServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    port: cdktf.stringToTerraform(struct!.port),
    proto: cdktf.stringToTerraform(struct!.proto),
    to_port: cdktf.stringToTerraform(struct!.toPort),
  }
}


export function enforcementBoundaryIngressServicesToHclTerraform(struct?: EnforcementBoundaryIngressServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_port: {
      value: cdktf.stringToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementBoundaryIngressServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcementBoundaryIngressServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementBoundaryIngressServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
      this._port = undefined;
      this._proto = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
      this._port = value.port;
      this._proto = value.proto;
      this._toPort = value.toPort;
    }
  }

  // href - computed: false, optional: true, required: false
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  public resetHref() {
    this._href = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: string; 
  public get toPort() {
    return this.getStringAttribute('to_port');
  }
  public set toPort(value: string) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class EnforcementBoundaryIngressServicesList extends cdktf.ComplexList {
  public internalValue? : EnforcementBoundaryIngressServices[] | cdktf.IResolvable

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
  public get(index: number): EnforcementBoundaryIngressServicesOutputReference {
    return new EnforcementBoundaryIngressServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnforcementBoundaryProvidersIpListStruct {
  /**
  * URI of IP List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#href EnforcementBoundary#href}
  */
  readonly href: string;
}

export function enforcementBoundaryProvidersIpListStructToTerraform(struct?: EnforcementBoundaryProvidersIpListStructOutputReference | EnforcementBoundaryProvidersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function enforcementBoundaryProvidersIpListStructToHclTerraform(struct?: EnforcementBoundaryProvidersIpListStructOutputReference | EnforcementBoundaryProvidersIpListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementBoundaryProvidersIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnforcementBoundaryProvidersIpListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementBoundaryProvidersIpListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface EnforcementBoundaryProvidersLabel {
  /**
  * URI of Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#href EnforcementBoundary#href}
  */
  readonly href: string;
}

export function enforcementBoundaryProvidersLabelToTerraform(struct?: EnforcementBoundaryProvidersLabelOutputReference | EnforcementBoundaryProvidersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function enforcementBoundaryProvidersLabelToHclTerraform(struct?: EnforcementBoundaryProvidersLabelOutputReference | EnforcementBoundaryProvidersLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementBoundaryProvidersLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnforcementBoundaryProvidersLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementBoundaryProvidersLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface EnforcementBoundaryProvidersLabelGroup {
  /**
  * URI of Label Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#href EnforcementBoundary#href}
  */
  readonly href: string;
}

export function enforcementBoundaryProvidersLabelGroupToTerraform(struct?: EnforcementBoundaryProvidersLabelGroupOutputReference | EnforcementBoundaryProvidersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function enforcementBoundaryProvidersLabelGroupToHclTerraform(struct?: EnforcementBoundaryProvidersLabelGroupOutputReference | EnforcementBoundaryProvidersLabelGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementBoundaryProvidersLabelGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnforcementBoundaryProvidersLabelGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementBoundaryProvidersLabelGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface EnforcementBoundaryProviders {
  /**
  * actors for providers. Valid value is "ams"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#actors EnforcementBoundary#actors}
  */
  readonly actors?: string;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#ip_list EnforcementBoundary#ip_list}
  */
  readonly ipList?: EnforcementBoundaryProvidersIpListStruct;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#label EnforcementBoundary#label}
  */
  readonly label?: EnforcementBoundaryProvidersLabel;
  /**
  * label_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#label_group EnforcementBoundary#label_group}
  */
  readonly labelGroup?: EnforcementBoundaryProvidersLabelGroup;
}

export function enforcementBoundaryProvidersToTerraform(struct?: EnforcementBoundaryProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actors: cdktf.stringToTerraform(struct!.actors),
    ip_list: enforcementBoundaryProvidersIpListStructToTerraform(struct!.ipList),
    label: enforcementBoundaryProvidersLabelToTerraform(struct!.label),
    label_group: enforcementBoundaryProvidersLabelGroupToTerraform(struct!.labelGroup),
  }
}


export function enforcementBoundaryProvidersToHclTerraform(struct?: EnforcementBoundaryProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actors: {
      value: cdktf.stringToHclTerraform(struct!.actors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_list: {
      value: enforcementBoundaryProvidersIpListStructToHclTerraform(struct!.ipList),
      isBlock: true,
      type: "set",
      storageClassType: "EnforcementBoundaryProvidersIpListStructList",
    },
    label: {
      value: enforcementBoundaryProvidersLabelToHclTerraform(struct!.label),
      isBlock: true,
      type: "set",
      storageClassType: "EnforcementBoundaryProvidersLabelList",
    },
    label_group: {
      value: enforcementBoundaryProvidersLabelGroupToHclTerraform(struct!.labelGroup),
      isBlock: true,
      type: "set",
      storageClassType: "EnforcementBoundaryProvidersLabelGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnforcementBoundaryProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnforcementBoundaryProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actors !== undefined) {
      hasAnyValues = true;
      internalValueResult.actors = this._actors;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._labelGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelGroup = this._labelGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnforcementBoundaryProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actors = undefined;
      this._ipList.internalValue = undefined;
      this._label.internalValue = undefined;
      this._labelGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actors = value.actors;
      this._ipList.internalValue = value.ipList;
      this._label.internalValue = value.label;
      this._labelGroup.internalValue = value.labelGroup;
    }
  }

  // actors - computed: false, optional: true, required: false
  private _actors?: string; 
  public get actors() {
    return this.getStringAttribute('actors');
  }
  public set actors(value: string) {
    this._actors = value;
  }
  public resetActors() {
    this._actors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorsInput() {
    return this._actors;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new EnforcementBoundaryProvidersIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: EnforcementBoundaryProvidersIpListStruct) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new EnforcementBoundaryProvidersLabelOutputReference(this, "label");
  public get label() {
    return this._label;
  }
  public putLabel(value: EnforcementBoundaryProvidersLabel) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // label_group - computed: false, optional: true, required: false
  private _labelGroup = new EnforcementBoundaryProvidersLabelGroupOutputReference(this, "label_group");
  public get labelGroup() {
    return this._labelGroup;
  }
  public putLabelGroup(value: EnforcementBoundaryProvidersLabelGroup) {
    this._labelGroup.internalValue = value;
  }
  public resetLabelGroup() {
    this._labelGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelGroupInput() {
    return this._labelGroup.internalValue;
  }
}

export class EnforcementBoundaryProvidersList extends cdktf.ComplexList {
  public internalValue? : EnforcementBoundaryProviders[] | cdktf.IResolvable

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
  public get(index: number): EnforcementBoundaryProvidersOutputReference {
    return new EnforcementBoundaryProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary illumio-core_enforcement_boundary}
*/
export class EnforcementBoundary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_enforcement_boundary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnforcementBoundary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnforcementBoundary to import
  * @param importFromId The id of the existing EnforcementBoundary that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnforcementBoundary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_enforcement_boundary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/enforcement_boundary illumio-core_enforcement_boundary} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnforcementBoundaryConfig
  */
  public constructor(scope: Construct, id: string, config: EnforcementBoundaryConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_enforcement_boundary',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._consumers.internalValue = config.consumers;
    this._ingressServices.internalValue = config.ingressServices;
    this._providers.internalValue = config.providers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caps - computed: true, optional: false, required: false
  public get caps() {
    return this.getListAttribute('caps');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // consumers - computed: false, optional: false, required: true
  private _consumers = new EnforcementBoundaryConsumersList(this, "consumers", true);
  public get consumers() {
    return this._consumers;
  }
  public putConsumers(value: EnforcementBoundaryConsumers[] | cdktf.IResolvable) {
    this._consumers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumersInput() {
    return this._consumers.internalValue;
  }

  // ingress_services - computed: false, optional: false, required: true
  private _ingressServices = new EnforcementBoundaryIngressServicesList(this, "ingress_services", true);
  public get ingressServices() {
    return this._ingressServices;
  }
  public putIngressServices(value: EnforcementBoundaryIngressServices[] | cdktf.IResolvable) {
    this._ingressServices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressServicesInput() {
    return this._ingressServices.internalValue;
  }

  // providers - computed: false, optional: false, required: true
  private _providers = new EnforcementBoundaryProvidersList(this, "providers", true);
  public get providers() {
    return this._providers;
  }
  public putProviders(value: EnforcementBoundaryProviders[] | cdktf.IResolvable) {
    this._providers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      consumers: cdktf.listMapper(enforcementBoundaryConsumersToTerraform, true)(this._consumers.internalValue),
      ingress_services: cdktf.listMapper(enforcementBoundaryIngressServicesToTerraform, true)(this._ingressServices.internalValue),
      providers: cdktf.listMapper(enforcementBoundaryProvidersToTerraform, true)(this._providers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      consumers: {
        value: cdktf.listMapperHcl(enforcementBoundaryConsumersToHclTerraform, true)(this._consumers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnforcementBoundaryConsumersList",
      },
      ingress_services: {
        value: cdktf.listMapperHcl(enforcementBoundaryIngressServicesToHclTerraform, true)(this._ingressServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnforcementBoundaryIngressServicesList",
      },
      providers: {
        value: cdktf.listMapperHcl(enforcementBoundaryProvidersToHclTerraform, true)(this._providers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnforcementBoundaryProvidersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
