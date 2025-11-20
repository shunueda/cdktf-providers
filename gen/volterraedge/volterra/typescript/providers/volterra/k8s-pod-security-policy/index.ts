// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SPodSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#annotations K8SPodSecurityPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#description K8SPodSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#disable K8SPodSecurityPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#id K8SPodSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#labels K8SPodSecurityPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#name K8SPodSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#namespace K8SPodSecurityPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#yaml K8SPodSecurityPolicy#yaml}
  */
  readonly yaml?: string;
  /**
  * psp_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#psp_spec K8SPodSecurityPolicy#psp_spec}
  */
  readonly pspSpec?: K8SPodSecurityPolicyPspSpec;
}
export interface K8SPodSecurityPolicyPspSpecAllowedCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#capabilities K8SPodSecurityPolicy#capabilities}
  */
  readonly capabilities: string[];
}

export function k8SPodSecurityPolicyPspSpecAllowedCapabilitiesToTerraform(struct?: K8SPodSecurityPolicyPspSpecAllowedCapabilitiesOutputReference | K8SPodSecurityPolicyPspSpecAllowedCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
  }
}


export function k8SPodSecurityPolicyPspSpecAllowedCapabilitiesToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecAllowedCapabilitiesOutputReference | K8SPodSecurityPolicyPspSpecAllowedCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecAllowedCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPodSecurityPolicyPspSpecAllowedCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecAllowedCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capabilities = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capabilities = value.capabilities;
    }
  }

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }
}
export interface K8SPodSecurityPolicyPspSpecAllowedHostPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#path_prefix K8SPodSecurityPolicy#path_prefix}
  */
  readonly pathPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#read_only K8SPodSecurityPolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function k8SPodSecurityPolicyPspSpecAllowedHostPathsToTerraform(struct?: K8SPodSecurityPolicyPspSpecAllowedHostPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function k8SPodSecurityPolicyPspSpecAllowedHostPathsToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecAllowedHostPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecAllowedHostPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SPodSecurityPolicyPspSpecAllowedHostPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecAllowedHostPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pathPrefix = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pathPrefix = value.pathPrefix;
      this._readOnly = value.readOnly;
    }
  }

  // path_prefix - computed: false, optional: false, required: true
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class K8SPodSecurityPolicyPspSpecAllowedHostPathsList extends cdktf.ComplexList {
  public internalValue? : K8SPodSecurityPolicyPspSpecAllowedHostPaths[] | cdktf.IResolvable

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
  public get(index: number): K8SPodSecurityPolicyPspSpecAllowedHostPathsOutputReference {
    return new K8SPodSecurityPolicyPspSpecAllowedHostPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SPodSecurityPolicyPspSpecDefaultCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#capabilities K8SPodSecurityPolicy#capabilities}
  */
  readonly capabilities: string[];
}

export function k8SPodSecurityPolicyPspSpecDefaultCapabilitiesToTerraform(struct?: K8SPodSecurityPolicyPspSpecDefaultCapabilitiesOutputReference | K8SPodSecurityPolicyPspSpecDefaultCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
  }
}


export function k8SPodSecurityPolicyPspSpecDefaultCapabilitiesToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecDefaultCapabilitiesOutputReference | K8SPodSecurityPolicyPspSpecDefaultCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecDefaultCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPodSecurityPolicyPspSpecDefaultCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecDefaultCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capabilities = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capabilities = value.capabilities;
    }
  }

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }
}
export interface K8SPodSecurityPolicyPspSpecDropCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#capabilities K8SPodSecurityPolicy#capabilities}
  */
  readonly capabilities: string[];
}

export function k8SPodSecurityPolicyPspSpecDropCapabilitiesToTerraform(struct?: K8SPodSecurityPolicyPspSpecDropCapabilitiesOutputReference | K8SPodSecurityPolicyPspSpecDropCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
  }
}


export function k8SPodSecurityPolicyPspSpecDropCapabilitiesToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecDropCapabilitiesOutputReference | K8SPodSecurityPolicyPspSpecDropCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecDropCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPodSecurityPolicyPspSpecDropCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecDropCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capabilities = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capabilities = value.capabilities;
    }
  }

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }
}
export interface K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#max_id K8SPodSecurityPolicy#max_id}
  */
  readonly maxId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#min_id K8SPodSecurityPolicy#min_id}
  */
  readonly minId: number;
}

export function k8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRangesToTerraform(struct?: K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_id: cdktf.numberToTerraform(struct!.maxId),
    min_id: cdktf.numberToTerraform(struct!.minId),
  }
}


export function k8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRangesToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_id: {
      value: cdktf.numberToHclTerraform(struct!.maxId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_id: {
      value: cdktf.numberToHclTerraform(struct!.minId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxId = this._maxId;
    }
    if (this._minId !== undefined) {
      hasAnyValues = true;
      internalValueResult.minId = this._minId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxId = undefined;
      this._minId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxId = value.maxId;
      this._minId = value.minId;
    }
  }

  // max_id - computed: false, optional: false, required: true
  private _maxId?: number; 
  public get maxId() {
    return this.getNumberAttribute('max_id');
  }
  public set maxId(value: number) {
    this._maxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdInput() {
    return this._maxId;
  }

  // min_id - computed: false, optional: false, required: true
  private _minId?: number; 
  public get minId() {
    return this.getNumberAttribute('min_id');
  }
  public set minId(value: number) {
    this._minId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdInput() {
    return this._minId;
  }
}

export class K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRangesList extends cdktf.ComplexList {
  public internalValue? : K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRanges[] | cdktf.IResolvable

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
  public get(index: number): K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRangesOutputReference {
    return new K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SPodSecurityPolicyPspSpecFsGroupStrategyOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#rule K8SPodSecurityPolicy#rule}
  */
  readonly rule?: string;
  /**
  * id_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#id_ranges K8SPodSecurityPolicy#id_ranges}
  */
  readonly idRanges?: K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRanges[] | cdktf.IResolvable;
}

export function k8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsToTerraform(struct?: K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsOutputReference | K8SPodSecurityPolicyPspSpecFsGroupStrategyOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    id_ranges: cdktf.listMapper(k8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRangesToTerraform, true)(struct!.idRanges),
  }
}


export function k8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsOutputReference | K8SPodSecurityPolicyPspSpecFsGroupStrategyOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_ranges: {
      value: cdktf.listMapperHcl(k8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRangesToHclTerraform, true)(struct!.idRanges),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPodSecurityPolicyPspSpecFsGroupStrategyOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._idRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idRanges = this._idRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecFsGroupStrategyOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._idRanges.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._idRanges.internalValue = value.idRanges;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // id_ranges - computed: false, optional: true, required: false
  private _idRanges = new K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRangesList(this, "id_ranges", false);
  public get idRanges() {
    return this._idRanges;
  }
  public putIdRanges(value: K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsIdRanges[] | cdktf.IResolvable) {
    this._idRanges.internalValue = value;
  }
  public resetIdRanges() {
    this._idRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idRangesInput() {
    return this._idRanges.internalValue;
  }
}
export interface K8SPodSecurityPolicyPspSpecRunAsGroupIdRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#max_id K8SPodSecurityPolicy#max_id}
  */
  readonly maxId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#min_id K8SPodSecurityPolicy#min_id}
  */
  readonly minId: number;
}

export function k8SPodSecurityPolicyPspSpecRunAsGroupIdRangesToTerraform(struct?: K8SPodSecurityPolicyPspSpecRunAsGroupIdRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_id: cdktf.numberToTerraform(struct!.maxId),
    min_id: cdktf.numberToTerraform(struct!.minId),
  }
}


export function k8SPodSecurityPolicyPspSpecRunAsGroupIdRangesToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecRunAsGroupIdRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_id: {
      value: cdktf.numberToHclTerraform(struct!.maxId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_id: {
      value: cdktf.numberToHclTerraform(struct!.minId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecRunAsGroupIdRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SPodSecurityPolicyPspSpecRunAsGroupIdRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxId = this._maxId;
    }
    if (this._minId !== undefined) {
      hasAnyValues = true;
      internalValueResult.minId = this._minId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecRunAsGroupIdRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxId = undefined;
      this._minId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxId = value.maxId;
      this._minId = value.minId;
    }
  }

  // max_id - computed: false, optional: false, required: true
  private _maxId?: number; 
  public get maxId() {
    return this.getNumberAttribute('max_id');
  }
  public set maxId(value: number) {
    this._maxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdInput() {
    return this._maxId;
  }

  // min_id - computed: false, optional: false, required: true
  private _minId?: number; 
  public get minId() {
    return this.getNumberAttribute('min_id');
  }
  public set minId(value: number) {
    this._minId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdInput() {
    return this._minId;
  }
}

export class K8SPodSecurityPolicyPspSpecRunAsGroupIdRangesList extends cdktf.ComplexList {
  public internalValue? : K8SPodSecurityPolicyPspSpecRunAsGroupIdRanges[] | cdktf.IResolvable

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
  public get(index: number): K8SPodSecurityPolicyPspSpecRunAsGroupIdRangesOutputReference {
    return new K8SPodSecurityPolicyPspSpecRunAsGroupIdRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SPodSecurityPolicyPspSpecRunAsGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#rule K8SPodSecurityPolicy#rule}
  */
  readonly rule?: string;
  /**
  * id_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#id_ranges K8SPodSecurityPolicy#id_ranges}
  */
  readonly idRanges?: K8SPodSecurityPolicyPspSpecRunAsGroupIdRanges[] | cdktf.IResolvable;
}

export function k8SPodSecurityPolicyPspSpecRunAsGroupToTerraform(struct?: K8SPodSecurityPolicyPspSpecRunAsGroupOutputReference | K8SPodSecurityPolicyPspSpecRunAsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    id_ranges: cdktf.listMapper(k8SPodSecurityPolicyPspSpecRunAsGroupIdRangesToTerraform, true)(struct!.idRanges),
  }
}


export function k8SPodSecurityPolicyPspSpecRunAsGroupToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecRunAsGroupOutputReference | K8SPodSecurityPolicyPspSpecRunAsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_ranges: {
      value: cdktf.listMapperHcl(k8SPodSecurityPolicyPspSpecRunAsGroupIdRangesToHclTerraform, true)(struct!.idRanges),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecRunAsGroupIdRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecRunAsGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPodSecurityPolicyPspSpecRunAsGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._idRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idRanges = this._idRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecRunAsGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._idRanges.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._idRanges.internalValue = value.idRanges;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // id_ranges - computed: false, optional: true, required: false
  private _idRanges = new K8SPodSecurityPolicyPspSpecRunAsGroupIdRangesList(this, "id_ranges", false);
  public get idRanges() {
    return this._idRanges;
  }
  public putIdRanges(value: K8SPodSecurityPolicyPspSpecRunAsGroupIdRanges[] | cdktf.IResolvable) {
    this._idRanges.internalValue = value;
  }
  public resetIdRanges() {
    this._idRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idRangesInput() {
    return this._idRanges.internalValue;
  }
}
export interface K8SPodSecurityPolicyPspSpecRunAsUserIdRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#max_id K8SPodSecurityPolicy#max_id}
  */
  readonly maxId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#min_id K8SPodSecurityPolicy#min_id}
  */
  readonly minId: number;
}

export function k8SPodSecurityPolicyPspSpecRunAsUserIdRangesToTerraform(struct?: K8SPodSecurityPolicyPspSpecRunAsUserIdRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_id: cdktf.numberToTerraform(struct!.maxId),
    min_id: cdktf.numberToTerraform(struct!.minId),
  }
}


export function k8SPodSecurityPolicyPspSpecRunAsUserIdRangesToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecRunAsUserIdRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_id: {
      value: cdktf.numberToHclTerraform(struct!.maxId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_id: {
      value: cdktf.numberToHclTerraform(struct!.minId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecRunAsUserIdRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SPodSecurityPolicyPspSpecRunAsUserIdRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxId = this._maxId;
    }
    if (this._minId !== undefined) {
      hasAnyValues = true;
      internalValueResult.minId = this._minId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecRunAsUserIdRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxId = undefined;
      this._minId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxId = value.maxId;
      this._minId = value.minId;
    }
  }

  // max_id - computed: false, optional: false, required: true
  private _maxId?: number; 
  public get maxId() {
    return this.getNumberAttribute('max_id');
  }
  public set maxId(value: number) {
    this._maxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdInput() {
    return this._maxId;
  }

  // min_id - computed: false, optional: false, required: true
  private _minId?: number; 
  public get minId() {
    return this.getNumberAttribute('min_id');
  }
  public set minId(value: number) {
    this._minId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdInput() {
    return this._minId;
  }
}

export class K8SPodSecurityPolicyPspSpecRunAsUserIdRangesList extends cdktf.ComplexList {
  public internalValue? : K8SPodSecurityPolicyPspSpecRunAsUserIdRanges[] | cdktf.IResolvable

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
  public get(index: number): K8SPodSecurityPolicyPspSpecRunAsUserIdRangesOutputReference {
    return new K8SPodSecurityPolicyPspSpecRunAsUserIdRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SPodSecurityPolicyPspSpecRunAsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#rule K8SPodSecurityPolicy#rule}
  */
  readonly rule?: string;
  /**
  * id_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#id_ranges K8SPodSecurityPolicy#id_ranges}
  */
  readonly idRanges?: K8SPodSecurityPolicyPspSpecRunAsUserIdRanges[] | cdktf.IResolvable;
}

export function k8SPodSecurityPolicyPspSpecRunAsUserToTerraform(struct?: K8SPodSecurityPolicyPspSpecRunAsUserOutputReference | K8SPodSecurityPolicyPspSpecRunAsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    id_ranges: cdktf.listMapper(k8SPodSecurityPolicyPspSpecRunAsUserIdRangesToTerraform, true)(struct!.idRanges),
  }
}


export function k8SPodSecurityPolicyPspSpecRunAsUserToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecRunAsUserOutputReference | K8SPodSecurityPolicyPspSpecRunAsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_ranges: {
      value: cdktf.listMapperHcl(k8SPodSecurityPolicyPspSpecRunAsUserIdRangesToHclTerraform, true)(struct!.idRanges),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecRunAsUserIdRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecRunAsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPodSecurityPolicyPspSpecRunAsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._idRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idRanges = this._idRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecRunAsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._idRanges.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._idRanges.internalValue = value.idRanges;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // id_ranges - computed: false, optional: true, required: false
  private _idRanges = new K8SPodSecurityPolicyPspSpecRunAsUserIdRangesList(this, "id_ranges", false);
  public get idRanges() {
    return this._idRanges;
  }
  public putIdRanges(value: K8SPodSecurityPolicyPspSpecRunAsUserIdRanges[] | cdktf.IResolvable) {
    this._idRanges.internalValue = value;
  }
  public resetIdRanges() {
    this._idRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idRangesInput() {
    return this._idRanges.internalValue;
  }
}
export interface K8SPodSecurityPolicyPspSpecRuntimeClass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#allowed_runtime_class_names K8SPodSecurityPolicy#allowed_runtime_class_names}
  */
  readonly allowedRuntimeClassNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#default_runtime_class_name K8SPodSecurityPolicy#default_runtime_class_name}
  */
  readonly defaultRuntimeClassName?: string;
}

export function k8SPodSecurityPolicyPspSpecRuntimeClassToTerraform(struct?: K8SPodSecurityPolicyPspSpecRuntimeClassOutputReference | K8SPodSecurityPolicyPspSpecRuntimeClass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_runtime_class_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRuntimeClassNames),
    default_runtime_class_name: cdktf.stringToTerraform(struct!.defaultRuntimeClassName),
  }
}


export function k8SPodSecurityPolicyPspSpecRuntimeClassToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecRuntimeClassOutputReference | K8SPodSecurityPolicyPspSpecRuntimeClass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_runtime_class_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRuntimeClassNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_runtime_class_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultRuntimeClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecRuntimeClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPodSecurityPolicyPspSpecRuntimeClass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRuntimeClassNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRuntimeClassNames = this._allowedRuntimeClassNames;
    }
    if (this._defaultRuntimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRuntimeClassName = this._defaultRuntimeClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecRuntimeClass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedRuntimeClassNames = undefined;
      this._defaultRuntimeClassName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedRuntimeClassNames = value.allowedRuntimeClassNames;
      this._defaultRuntimeClassName = value.defaultRuntimeClassName;
    }
  }

  // allowed_runtime_class_names - computed: false, optional: false, required: true
  private _allowedRuntimeClassNames?: string[]; 
  public get allowedRuntimeClassNames() {
    return this.getListAttribute('allowed_runtime_class_names');
  }
  public set allowedRuntimeClassNames(value: string[]) {
    this._allowedRuntimeClassNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRuntimeClassNamesInput() {
    return this._allowedRuntimeClassNames;
  }

  // default_runtime_class_name - computed: false, optional: true, required: false
  private _defaultRuntimeClassName?: string; 
  public get defaultRuntimeClassName() {
    return this.getStringAttribute('default_runtime_class_name');
  }
  public set defaultRuntimeClassName(value: string) {
    this._defaultRuntimeClassName = value;
  }
  public resetDefaultRuntimeClassName() {
    this._defaultRuntimeClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuntimeClassNameInput() {
    return this._defaultRuntimeClassName;
  }
}
export interface K8SPodSecurityPolicyPspSpecSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#level K8SPodSecurityPolicy#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#role K8SPodSecurityPolicy#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#rule K8SPodSecurityPolicy#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#type K8SPodSecurityPolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#user K8SPodSecurityPolicy#user}
  */
  readonly user?: string;
}

export function k8SPodSecurityPolicyPspSpecSeLinuxOptionsToTerraform(struct?: K8SPodSecurityPolicyPspSpecSeLinuxOptionsOutputReference | K8SPodSecurityPolicyPspSpecSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    rule: cdktf.stringToTerraform(struct!.rule),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function k8SPodSecurityPolicyPspSpecSeLinuxOptionsToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecSeLinuxOptionsOutputReference | K8SPodSecurityPolicyPspSpecSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPodSecurityPolicyPspSpecSeLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecSeLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._role = undefined;
      this._rule = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._role = value.role;
      this._rule = value.rule;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#max_id K8SPodSecurityPolicy#max_id}
  */
  readonly maxId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#min_id K8SPodSecurityPolicy#min_id}
  */
  readonly minId: number;
}

export function k8SPodSecurityPolicyPspSpecSupplementalGroupsIdRangesToTerraform(struct?: K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_id: cdktf.numberToTerraform(struct!.maxId),
    min_id: cdktf.numberToTerraform(struct!.minId),
  }
}


export function k8SPodSecurityPolicyPspSpecSupplementalGroupsIdRangesToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_id: {
      value: cdktf.numberToHclTerraform(struct!.maxId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_id: {
      value: cdktf.numberToHclTerraform(struct!.minId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxId = this._maxId;
    }
    if (this._minId !== undefined) {
      hasAnyValues = true;
      internalValueResult.minId = this._minId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxId = undefined;
      this._minId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxId = value.maxId;
      this._minId = value.minId;
    }
  }

  // max_id - computed: false, optional: false, required: true
  private _maxId?: number; 
  public get maxId() {
    return this.getNumberAttribute('max_id');
  }
  public set maxId(value: number) {
    this._maxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdInput() {
    return this._maxId;
  }

  // min_id - computed: false, optional: false, required: true
  private _minId?: number; 
  public get minId() {
    return this.getNumberAttribute('min_id');
  }
  public set minId(value: number) {
    this._minId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdInput() {
    return this._minId;
  }
}

export class K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRangesList extends cdktf.ComplexList {
  public internalValue? : K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRanges[] | cdktf.IResolvable

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
  public get(index: number): K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRangesOutputReference {
    return new K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SPodSecurityPolicyPspSpecSupplementalGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#rule K8SPodSecurityPolicy#rule}
  */
  readonly rule?: string;
  /**
  * id_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#id_ranges K8SPodSecurityPolicy#id_ranges}
  */
  readonly idRanges?: K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRanges[] | cdktf.IResolvable;
}

export function k8SPodSecurityPolicyPspSpecSupplementalGroupsToTerraform(struct?: K8SPodSecurityPolicyPspSpecSupplementalGroupsOutputReference | K8SPodSecurityPolicyPspSpecSupplementalGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    id_ranges: cdktf.listMapper(k8SPodSecurityPolicyPspSpecSupplementalGroupsIdRangesToTerraform, true)(struct!.idRanges),
  }
}


export function k8SPodSecurityPolicyPspSpecSupplementalGroupsToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecSupplementalGroupsOutputReference | K8SPodSecurityPolicyPspSpecSupplementalGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_ranges: {
      value: cdktf.listMapperHcl(k8SPodSecurityPolicyPspSpecSupplementalGroupsIdRangesToHclTerraform, true)(struct!.idRanges),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecSupplementalGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPodSecurityPolicyPspSpecSupplementalGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._idRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idRanges = this._idRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpecSupplementalGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._idRanges.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._idRanges.internalValue = value.idRanges;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // id_ranges - computed: false, optional: true, required: false
  private _idRanges = new K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRangesList(this, "id_ranges", false);
  public get idRanges() {
    return this._idRanges;
  }
  public putIdRanges(value: K8SPodSecurityPolicyPspSpecSupplementalGroupsIdRanges[] | cdktf.IResolvable) {
    this._idRanges.internalValue = value;
  }
  public resetIdRanges() {
    this._idRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idRangesInput() {
    return this._idRanges.internalValue;
  }
}
export interface K8SPodSecurityPolicyPspSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#allow_privilege_escalation K8SPodSecurityPolicy#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#allowed_csi_drivers K8SPodSecurityPolicy#allowed_csi_drivers}
  */
  readonly allowedCsiDrivers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#allowed_flex_volumes K8SPodSecurityPolicy#allowed_flex_volumes}
  */
  readonly allowedFlexVolumes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#allowed_proc_mounts K8SPodSecurityPolicy#allowed_proc_mounts}
  */
  readonly allowedProcMounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#allowed_unsafe_sysctls K8SPodSecurityPolicy#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#default_allow_privilege_escalation K8SPodSecurityPolicy#default_allow_privilege_escalation}
  */
  readonly defaultAllowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#forbidden_sysctls K8SPodSecurityPolicy#forbidden_sysctls}
  */
  readonly forbiddenSysctls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#host_ipc K8SPodSecurityPolicy#host_ipc}
  */
  readonly hostIpc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#host_network K8SPodSecurityPolicy#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#host_pid K8SPodSecurityPolicy#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#host_port_ranges K8SPodSecurityPolicy#host_port_ranges}
  */
  readonly hostPortRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#no_allowed_capabilities K8SPodSecurityPolicy#no_allowed_capabilities}
  */
  readonly noAllowedCapabilities?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#no_default_capabilities K8SPodSecurityPolicy#no_default_capabilities}
  */
  readonly noDefaultCapabilities?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#no_drop_capabilities K8SPodSecurityPolicy#no_drop_capabilities}
  */
  readonly noDropCapabilities?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#no_fs_groups K8SPodSecurityPolicy#no_fs_groups}
  */
  readonly noFsGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#no_run_as_group K8SPodSecurityPolicy#no_run_as_group}
  */
  readonly noRunAsGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#no_run_as_user K8SPodSecurityPolicy#no_run_as_user}
  */
  readonly noRunAsUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#no_runtime_class K8SPodSecurityPolicy#no_runtime_class}
  */
  readonly noRuntimeClass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#no_se_linux_options K8SPodSecurityPolicy#no_se_linux_options}
  */
  readonly noSeLinuxOptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#no_supplemental_groups K8SPodSecurityPolicy#no_supplemental_groups}
  */
  readonly noSupplementalGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#privileged K8SPodSecurityPolicy#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#read_only_root_filesystem K8SPodSecurityPolicy#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#volumes K8SPodSecurityPolicy#volumes}
  */
  readonly volumes?: string[];
  /**
  * allowed_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#allowed_capabilities K8SPodSecurityPolicy#allowed_capabilities}
  */
  readonly allowedCapabilities?: K8SPodSecurityPolicyPspSpecAllowedCapabilities;
  /**
  * allowed_host_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#allowed_host_paths K8SPodSecurityPolicy#allowed_host_paths}
  */
  readonly allowedHostPaths?: K8SPodSecurityPolicyPspSpecAllowedHostPaths[] | cdktf.IResolvable;
  /**
  * default_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#default_capabilities K8SPodSecurityPolicy#default_capabilities}
  */
  readonly defaultCapabilities?: K8SPodSecurityPolicyPspSpecDefaultCapabilities;
  /**
  * drop_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#drop_capabilities K8SPodSecurityPolicy#drop_capabilities}
  */
  readonly dropCapabilities?: K8SPodSecurityPolicyPspSpecDropCapabilities;
  /**
  * fs_group_strategy_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#fs_group_strategy_options K8SPodSecurityPolicy#fs_group_strategy_options}
  */
  readonly fsGroupStrategyOptions?: K8SPodSecurityPolicyPspSpecFsGroupStrategyOptions;
  /**
  * run_as_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#run_as_group K8SPodSecurityPolicy#run_as_group}
  */
  readonly runAsGroup?: K8SPodSecurityPolicyPspSpecRunAsGroup;
  /**
  * run_as_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#run_as_user K8SPodSecurityPolicy#run_as_user}
  */
  readonly runAsUser?: K8SPodSecurityPolicyPspSpecRunAsUser;
  /**
  * runtime_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#runtime_class K8SPodSecurityPolicy#runtime_class}
  */
  readonly runtimeClass?: K8SPodSecurityPolicyPspSpecRuntimeClass;
  /**
  * se_linux_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#se_linux_options K8SPodSecurityPolicy#se_linux_options}
  */
  readonly seLinuxOptions?: K8SPodSecurityPolicyPspSpecSeLinuxOptions;
  /**
  * supplemental_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#supplemental_groups K8SPodSecurityPolicy#supplemental_groups}
  */
  readonly supplementalGroups?: K8SPodSecurityPolicyPspSpecSupplementalGroups;
}

export function k8SPodSecurityPolicyPspSpecToTerraform(struct?: K8SPodSecurityPolicyPspSpecOutputReference | K8SPodSecurityPolicyPspSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    allowed_csi_drivers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCsiDrivers),
    allowed_flex_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedFlexVolumes),
    allowed_proc_mounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedProcMounts),
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    default_allow_privilege_escalation: cdktf.booleanToTerraform(struct!.defaultAllowPrivilegeEscalation),
    forbidden_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forbiddenSysctls),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    host_port_ranges: cdktf.stringToTerraform(struct!.hostPortRanges),
    no_allowed_capabilities: cdktf.booleanToTerraform(struct!.noAllowedCapabilities),
    no_default_capabilities: cdktf.booleanToTerraform(struct!.noDefaultCapabilities),
    no_drop_capabilities: cdktf.booleanToTerraform(struct!.noDropCapabilities),
    no_fs_groups: cdktf.booleanToTerraform(struct!.noFsGroups),
    no_run_as_group: cdktf.booleanToTerraform(struct!.noRunAsGroup),
    no_run_as_user: cdktf.booleanToTerraform(struct!.noRunAsUser),
    no_runtime_class: cdktf.booleanToTerraform(struct!.noRuntimeClass),
    no_se_linux_options: cdktf.booleanToTerraform(struct!.noSeLinuxOptions),
    no_supplemental_groups: cdktf.booleanToTerraform(struct!.noSupplementalGroups),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
    allowed_capabilities: k8SPodSecurityPolicyPspSpecAllowedCapabilitiesToTerraform(struct!.allowedCapabilities),
    allowed_host_paths: cdktf.listMapper(k8SPodSecurityPolicyPspSpecAllowedHostPathsToTerraform, true)(struct!.allowedHostPaths),
    default_capabilities: k8SPodSecurityPolicyPspSpecDefaultCapabilitiesToTerraform(struct!.defaultCapabilities),
    drop_capabilities: k8SPodSecurityPolicyPspSpecDropCapabilitiesToTerraform(struct!.dropCapabilities),
    fs_group_strategy_options: k8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsToTerraform(struct!.fsGroupStrategyOptions),
    run_as_group: k8SPodSecurityPolicyPspSpecRunAsGroupToTerraform(struct!.runAsGroup),
    run_as_user: k8SPodSecurityPolicyPspSpecRunAsUserToTerraform(struct!.runAsUser),
    runtime_class: k8SPodSecurityPolicyPspSpecRuntimeClassToTerraform(struct!.runtimeClass),
    se_linux_options: k8SPodSecurityPolicyPspSpecSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    supplemental_groups: k8SPodSecurityPolicyPspSpecSupplementalGroupsToTerraform(struct!.supplementalGroups),
  }
}


export function k8SPodSecurityPolicyPspSpecToHclTerraform(struct?: K8SPodSecurityPolicyPspSpecOutputReference | K8SPodSecurityPolicyPspSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_csi_drivers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCsiDrivers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_flex_volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedFlexVolumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_proc_mounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedProcMounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.defaultAllowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forbidden_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forbiddenSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host_ipc: {
      value: cdktf.booleanToHclTerraform(struct!.hostIpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_pid: {
      value: cdktf.booleanToHclTerraform(struct!.hostPid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.hostPortRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_allowed_capabilities: {
      value: cdktf.booleanToHclTerraform(struct!.noAllowedCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_default_capabilities: {
      value: cdktf.booleanToHclTerraform(struct!.noDefaultCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_drop_capabilities: {
      value: cdktf.booleanToHclTerraform(struct!.noDropCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_fs_groups: {
      value: cdktf.booleanToHclTerraform(struct!.noFsGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_run_as_group: {
      value: cdktf.booleanToHclTerraform(struct!.noRunAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_run_as_user: {
      value: cdktf.booleanToHclTerraform(struct!.noRunAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_runtime_class: {
      value: cdktf.booleanToHclTerraform(struct!.noRuntimeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_se_linux_options: {
      value: cdktf.booleanToHclTerraform(struct!.noSeLinuxOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_supplemental_groups: {
      value: cdktf.booleanToHclTerraform(struct!.noSupplementalGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_capabilities: {
      value: k8SPodSecurityPolicyPspSpecAllowedCapabilitiesToHclTerraform(struct!.allowedCapabilities),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecAllowedCapabilitiesList",
    },
    allowed_host_paths: {
      value: cdktf.listMapperHcl(k8SPodSecurityPolicyPspSpecAllowedHostPathsToHclTerraform, true)(struct!.allowedHostPaths),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecAllowedHostPathsList",
    },
    default_capabilities: {
      value: k8SPodSecurityPolicyPspSpecDefaultCapabilitiesToHclTerraform(struct!.defaultCapabilities),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecDefaultCapabilitiesList",
    },
    drop_capabilities: {
      value: k8SPodSecurityPolicyPspSpecDropCapabilitiesToHclTerraform(struct!.dropCapabilities),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecDropCapabilitiesList",
    },
    fs_group_strategy_options: {
      value: k8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsToHclTerraform(struct!.fsGroupStrategyOptions),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsList",
    },
    run_as_group: {
      value: k8SPodSecurityPolicyPspSpecRunAsGroupToHclTerraform(struct!.runAsGroup),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecRunAsGroupList",
    },
    run_as_user: {
      value: k8SPodSecurityPolicyPspSpecRunAsUserToHclTerraform(struct!.runAsUser),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecRunAsUserList",
    },
    runtime_class: {
      value: k8SPodSecurityPolicyPspSpecRuntimeClassToHclTerraform(struct!.runtimeClass),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecRuntimeClassList",
    },
    se_linux_options: {
      value: k8SPodSecurityPolicyPspSpecSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecSeLinuxOptionsList",
    },
    supplemental_groups: {
      value: k8SPodSecurityPolicyPspSpecSupplementalGroupsToHclTerraform(struct!.supplementalGroups),
      isBlock: true,
      type: "list",
      storageClassType: "K8SPodSecurityPolicyPspSpecSupplementalGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityPolicyPspSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SPodSecurityPolicyPspSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._allowedCsiDrivers !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCsiDrivers = this._allowedCsiDrivers;
    }
    if (this._allowedFlexVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedFlexVolumes = this._allowedFlexVolumes;
    }
    if (this._allowedProcMounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedProcMounts = this._allowedProcMounts;
    }
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._defaultAllowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAllowPrivilegeEscalation = this._defaultAllowPrivilegeEscalation;
    }
    if (this._forbiddenSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenSysctls = this._forbiddenSysctls;
    }
    if (this._hostIpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIpc = this._hostIpc;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._hostPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPid = this._hostPid;
    }
    if (this._hostPortRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPortRanges = this._hostPortRanges;
    }
    if (this._noAllowedCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAllowedCapabilities = this._noAllowedCapabilities;
    }
    if (this._noDefaultCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDefaultCapabilities = this._noDefaultCapabilities;
    }
    if (this._noDropCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDropCapabilities = this._noDropCapabilities;
    }
    if (this._noFsGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFsGroups = this._noFsGroups;
    }
    if (this._noRunAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRunAsGroup = this._noRunAsGroup;
    }
    if (this._noRunAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRunAsUser = this._noRunAsUser;
    }
    if (this._noRuntimeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRuntimeClass = this._noRuntimeClass;
    }
    if (this._noSeLinuxOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSeLinuxOptions = this._noSeLinuxOptions;
    }
    if (this._noSupplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSupplementalGroups = this._noSupplementalGroups;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    if (this._allowedCapabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCapabilities = this._allowedCapabilities?.internalValue;
    }
    if (this._allowedHostPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHostPaths = this._allowedHostPaths?.internalValue;
    }
    if (this._defaultCapabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCapabilities = this._defaultCapabilities?.internalValue;
    }
    if (this._dropCapabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCapabilities = this._dropCapabilities?.internalValue;
    }
    if (this._fsGroupStrategyOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupStrategyOptions = this._fsGroupStrategyOptions?.internalValue;
    }
    if (this._runAsGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup?.internalValue;
    }
    if (this._runAsUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser?.internalValue;
    }
    if (this._runtimeClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClass = this._runtimeClass?.internalValue;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._supplementalGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityPolicyPspSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPrivilegeEscalation = undefined;
      this._allowedCsiDrivers = undefined;
      this._allowedFlexVolumes = undefined;
      this._allowedProcMounts = undefined;
      this._allowedUnsafeSysctls = undefined;
      this._defaultAllowPrivilegeEscalation = undefined;
      this._forbiddenSysctls = undefined;
      this._hostIpc = undefined;
      this._hostNetwork = undefined;
      this._hostPid = undefined;
      this._hostPortRanges = undefined;
      this._noAllowedCapabilities = undefined;
      this._noDefaultCapabilities = undefined;
      this._noDropCapabilities = undefined;
      this._noFsGroups = undefined;
      this._noRunAsGroup = undefined;
      this._noRunAsUser = undefined;
      this._noRuntimeClass = undefined;
      this._noSeLinuxOptions = undefined;
      this._noSupplementalGroups = undefined;
      this._privileged = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._volumes = undefined;
      this._allowedCapabilities.internalValue = undefined;
      this._allowedHostPaths.internalValue = undefined;
      this._defaultCapabilities.internalValue = undefined;
      this._dropCapabilities.internalValue = undefined;
      this._fsGroupStrategyOptions.internalValue = undefined;
      this._runAsGroup.internalValue = undefined;
      this._runAsUser.internalValue = undefined;
      this._runtimeClass.internalValue = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._supplementalGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._allowedCsiDrivers = value.allowedCsiDrivers;
      this._allowedFlexVolumes = value.allowedFlexVolumes;
      this._allowedProcMounts = value.allowedProcMounts;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._defaultAllowPrivilegeEscalation = value.defaultAllowPrivilegeEscalation;
      this._forbiddenSysctls = value.forbiddenSysctls;
      this._hostIpc = value.hostIpc;
      this._hostNetwork = value.hostNetwork;
      this._hostPid = value.hostPid;
      this._hostPortRanges = value.hostPortRanges;
      this._noAllowedCapabilities = value.noAllowedCapabilities;
      this._noDefaultCapabilities = value.noDefaultCapabilities;
      this._noDropCapabilities = value.noDropCapabilities;
      this._noFsGroups = value.noFsGroups;
      this._noRunAsGroup = value.noRunAsGroup;
      this._noRunAsUser = value.noRunAsUser;
      this._noRuntimeClass = value.noRuntimeClass;
      this._noSeLinuxOptions = value.noSeLinuxOptions;
      this._noSupplementalGroups = value.noSupplementalGroups;
      this._privileged = value.privileged;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._volumes = value.volumes;
      this._allowedCapabilities.internalValue = value.allowedCapabilities;
      this._allowedHostPaths.internalValue = value.allowedHostPaths;
      this._defaultCapabilities.internalValue = value.defaultCapabilities;
      this._dropCapabilities.internalValue = value.dropCapabilities;
      this._fsGroupStrategyOptions.internalValue = value.fsGroupStrategyOptions;
      this._runAsGroup.internalValue = value.runAsGroup;
      this._runAsUser.internalValue = value.runAsUser;
      this._runtimeClass.internalValue = value.runtimeClass;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._supplementalGroups.internalValue = value.supplementalGroups;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // allowed_csi_drivers - computed: false, optional: true, required: false
  private _allowedCsiDrivers?: string[]; 
  public get allowedCsiDrivers() {
    return this.getListAttribute('allowed_csi_drivers');
  }
  public set allowedCsiDrivers(value: string[]) {
    this._allowedCsiDrivers = value;
  }
  public resetAllowedCsiDrivers() {
    this._allowedCsiDrivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCsiDriversInput() {
    return this._allowedCsiDrivers;
  }

  // allowed_flex_volumes - computed: false, optional: true, required: false
  private _allowedFlexVolumes?: string[]; 
  public get allowedFlexVolumes() {
    return this.getListAttribute('allowed_flex_volumes');
  }
  public set allowedFlexVolumes(value: string[]) {
    this._allowedFlexVolumes = value;
  }
  public resetAllowedFlexVolumes() {
    this._allowedFlexVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFlexVolumesInput() {
    return this._allowedFlexVolumes;
  }

  // allowed_proc_mounts - computed: false, optional: true, required: false
  private _allowedProcMounts?: string[]; 
  public get allowedProcMounts() {
    return this.getListAttribute('allowed_proc_mounts');
  }
  public set allowedProcMounts(value: string[]) {
    this._allowedProcMounts = value;
  }
  public resetAllowedProcMounts() {
    this._allowedProcMounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProcMountsInput() {
    return this._allowedProcMounts;
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // default_allow_privilege_escalation - computed: false, optional: true, required: false
  private _defaultAllowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get defaultAllowPrivilegeEscalation() {
    return this.getBooleanAttribute('default_allow_privilege_escalation');
  }
  public set defaultAllowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._defaultAllowPrivilegeEscalation = value;
  }
  public resetDefaultAllowPrivilegeEscalation() {
    this._defaultAllowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAllowPrivilegeEscalationInput() {
    return this._defaultAllowPrivilegeEscalation;
  }

  // forbidden_sysctls - computed: false, optional: true, required: false
  private _forbiddenSysctls?: string[]; 
  public get forbiddenSysctls() {
    return this.getListAttribute('forbidden_sysctls');
  }
  public set forbiddenSysctls(value: string[]) {
    this._forbiddenSysctls = value;
  }
  public resetForbiddenSysctls() {
    this._forbiddenSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenSysctlsInput() {
    return this._forbiddenSysctls;
  }

  // host_ipc - computed: false, optional: true, required: false
  private _hostIpc?: boolean | cdktf.IResolvable; 
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }
  public set hostIpc(value: boolean | cdktf.IResolvable) {
    this._hostIpc = value;
  }
  public resetHostIpc() {
    this._hostIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpcInput() {
    return this._hostIpc;
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // host_pid - computed: false, optional: true, required: false
  private _hostPid?: boolean | cdktf.IResolvable; 
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }
  public set hostPid(value: boolean | cdktf.IResolvable) {
    this._hostPid = value;
  }
  public resetHostPid() {
    this._hostPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPidInput() {
    return this._hostPid;
  }

  // host_port_ranges - computed: false, optional: true, required: false
  private _hostPortRanges?: string; 
  public get hostPortRanges() {
    return this.getStringAttribute('host_port_ranges');
  }
  public set hostPortRanges(value: string) {
    this._hostPortRanges = value;
  }
  public resetHostPortRanges() {
    this._hostPortRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortRangesInput() {
    return this._hostPortRanges;
  }

  // no_allowed_capabilities - computed: false, optional: true, required: false
  private _noAllowedCapabilities?: boolean | cdktf.IResolvable; 
  public get noAllowedCapabilities() {
    return this.getBooleanAttribute('no_allowed_capabilities');
  }
  public set noAllowedCapabilities(value: boolean | cdktf.IResolvable) {
    this._noAllowedCapabilities = value;
  }
  public resetNoAllowedCapabilities() {
    this._noAllowedCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAllowedCapabilitiesInput() {
    return this._noAllowedCapabilities;
  }

  // no_default_capabilities - computed: false, optional: true, required: false
  private _noDefaultCapabilities?: boolean | cdktf.IResolvable; 
  public get noDefaultCapabilities() {
    return this.getBooleanAttribute('no_default_capabilities');
  }
  public set noDefaultCapabilities(value: boolean | cdktf.IResolvable) {
    this._noDefaultCapabilities = value;
  }
  public resetNoDefaultCapabilities() {
    this._noDefaultCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDefaultCapabilitiesInput() {
    return this._noDefaultCapabilities;
  }

  // no_drop_capabilities - computed: false, optional: true, required: false
  private _noDropCapabilities?: boolean | cdktf.IResolvable; 
  public get noDropCapabilities() {
    return this.getBooleanAttribute('no_drop_capabilities');
  }
  public set noDropCapabilities(value: boolean | cdktf.IResolvable) {
    this._noDropCapabilities = value;
  }
  public resetNoDropCapabilities() {
    this._noDropCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDropCapabilitiesInput() {
    return this._noDropCapabilities;
  }

  // no_fs_groups - computed: false, optional: true, required: false
  private _noFsGroups?: boolean | cdktf.IResolvable; 
  public get noFsGroups() {
    return this.getBooleanAttribute('no_fs_groups');
  }
  public set noFsGroups(value: boolean | cdktf.IResolvable) {
    this._noFsGroups = value;
  }
  public resetNoFsGroups() {
    this._noFsGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFsGroupsInput() {
    return this._noFsGroups;
  }

  // no_run_as_group - computed: false, optional: true, required: false
  private _noRunAsGroup?: boolean | cdktf.IResolvable; 
  public get noRunAsGroup() {
    return this.getBooleanAttribute('no_run_as_group');
  }
  public set noRunAsGroup(value: boolean | cdktf.IResolvable) {
    this._noRunAsGroup = value;
  }
  public resetNoRunAsGroup() {
    this._noRunAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRunAsGroupInput() {
    return this._noRunAsGroup;
  }

  // no_run_as_user - computed: false, optional: true, required: false
  private _noRunAsUser?: boolean | cdktf.IResolvable; 
  public get noRunAsUser() {
    return this.getBooleanAttribute('no_run_as_user');
  }
  public set noRunAsUser(value: boolean | cdktf.IResolvable) {
    this._noRunAsUser = value;
  }
  public resetNoRunAsUser() {
    this._noRunAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRunAsUserInput() {
    return this._noRunAsUser;
  }

  // no_runtime_class - computed: false, optional: true, required: false
  private _noRuntimeClass?: boolean | cdktf.IResolvable; 
  public get noRuntimeClass() {
    return this.getBooleanAttribute('no_runtime_class');
  }
  public set noRuntimeClass(value: boolean | cdktf.IResolvable) {
    this._noRuntimeClass = value;
  }
  public resetNoRuntimeClass() {
    this._noRuntimeClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRuntimeClassInput() {
    return this._noRuntimeClass;
  }

  // no_se_linux_options - computed: false, optional: true, required: false
  private _noSeLinuxOptions?: boolean | cdktf.IResolvable; 
  public get noSeLinuxOptions() {
    return this.getBooleanAttribute('no_se_linux_options');
  }
  public set noSeLinuxOptions(value: boolean | cdktf.IResolvable) {
    this._noSeLinuxOptions = value;
  }
  public resetNoSeLinuxOptions() {
    this._noSeLinuxOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSeLinuxOptionsInput() {
    return this._noSeLinuxOptions;
  }

  // no_supplemental_groups - computed: false, optional: true, required: false
  private _noSupplementalGroups?: boolean | cdktf.IResolvable; 
  public get noSupplementalGroups() {
    return this.getBooleanAttribute('no_supplemental_groups');
  }
  public set noSupplementalGroups(value: boolean | cdktf.IResolvable) {
    this._noSupplementalGroups = value;
  }
  public resetNoSupplementalGroups() {
    this._noSupplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSupplementalGroupsInput() {
    return this._noSupplementalGroups;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: string[]; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }

  // allowed_capabilities - computed: false, optional: true, required: false
  private _allowedCapabilities = new K8SPodSecurityPolicyPspSpecAllowedCapabilitiesOutputReference(this, "allowed_capabilities");
  public get allowedCapabilities() {
    return this._allowedCapabilities;
  }
  public putAllowedCapabilities(value: K8SPodSecurityPolicyPspSpecAllowedCapabilities) {
    this._allowedCapabilities.internalValue = value;
  }
  public resetAllowedCapabilities() {
    this._allowedCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCapabilitiesInput() {
    return this._allowedCapabilities.internalValue;
  }

  // allowed_host_paths - computed: false, optional: true, required: false
  private _allowedHostPaths = new K8SPodSecurityPolicyPspSpecAllowedHostPathsList(this, "allowed_host_paths", false);
  public get allowedHostPaths() {
    return this._allowedHostPaths;
  }
  public putAllowedHostPaths(value: K8SPodSecurityPolicyPspSpecAllowedHostPaths[] | cdktf.IResolvable) {
    this._allowedHostPaths.internalValue = value;
  }
  public resetAllowedHostPaths() {
    this._allowedHostPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostPathsInput() {
    return this._allowedHostPaths.internalValue;
  }

  // default_capabilities - computed: false, optional: true, required: false
  private _defaultCapabilities = new K8SPodSecurityPolicyPspSpecDefaultCapabilitiesOutputReference(this, "default_capabilities");
  public get defaultCapabilities() {
    return this._defaultCapabilities;
  }
  public putDefaultCapabilities(value: K8SPodSecurityPolicyPspSpecDefaultCapabilities) {
    this._defaultCapabilities.internalValue = value;
  }
  public resetDefaultCapabilities() {
    this._defaultCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCapabilitiesInput() {
    return this._defaultCapabilities.internalValue;
  }

  // drop_capabilities - computed: false, optional: true, required: false
  private _dropCapabilities = new K8SPodSecurityPolicyPspSpecDropCapabilitiesOutputReference(this, "drop_capabilities");
  public get dropCapabilities() {
    return this._dropCapabilities;
  }
  public putDropCapabilities(value: K8SPodSecurityPolicyPspSpecDropCapabilities) {
    this._dropCapabilities.internalValue = value;
  }
  public resetDropCapabilities() {
    this._dropCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCapabilitiesInput() {
    return this._dropCapabilities.internalValue;
  }

  // fs_group_strategy_options - computed: false, optional: true, required: false
  private _fsGroupStrategyOptions = new K8SPodSecurityPolicyPspSpecFsGroupStrategyOptionsOutputReference(this, "fs_group_strategy_options");
  public get fsGroupStrategyOptions() {
    return this._fsGroupStrategyOptions;
  }
  public putFsGroupStrategyOptions(value: K8SPodSecurityPolicyPspSpecFsGroupStrategyOptions) {
    this._fsGroupStrategyOptions.internalValue = value;
  }
  public resetFsGroupStrategyOptions() {
    this._fsGroupStrategyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupStrategyOptionsInput() {
    return this._fsGroupStrategyOptions.internalValue;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup = new K8SPodSecurityPolicyPspSpecRunAsGroupOutputReference(this, "run_as_group");
  public get runAsGroup() {
    return this._runAsGroup;
  }
  public putRunAsGroup(value: K8SPodSecurityPolicyPspSpecRunAsGroup) {
    this._runAsGroup.internalValue = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup.internalValue;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser = new K8SPodSecurityPolicyPspSpecRunAsUserOutputReference(this, "run_as_user");
  public get runAsUser() {
    return this._runAsUser;
  }
  public putRunAsUser(value: K8SPodSecurityPolicyPspSpecRunAsUser) {
    this._runAsUser.internalValue = value;
  }
  public resetRunAsUser() {
    this._runAsUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser.internalValue;
  }

  // runtime_class - computed: false, optional: true, required: false
  private _runtimeClass = new K8SPodSecurityPolicyPspSpecRuntimeClassOutputReference(this, "runtime_class");
  public get runtimeClass() {
    return this._runtimeClass;
  }
  public putRuntimeClass(value: K8SPodSecurityPolicyPspSpecRuntimeClass) {
    this._runtimeClass.internalValue = value;
  }
  public resetRuntimeClass() {
    this._runtimeClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassInput() {
    return this._runtimeClass.internalValue;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new K8SPodSecurityPolicyPspSpecSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: K8SPodSecurityPolicyPspSpecSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups = new K8SPodSecurityPolicyPspSpecSupplementalGroupsOutputReference(this, "supplemental_groups");
  public get supplementalGroups() {
    return this._supplementalGroups;
  }
  public putSupplementalGroups(value: K8SPodSecurityPolicyPspSpecSupplementalGroups) {
    this._supplementalGroups.internalValue = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy volterra_k8s_pod_security_policy}
*/
export class K8SPodSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_k8s_pod_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SPodSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SPodSecurityPolicy to import
  * @param importFromId The id of the existing K8SPodSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SPodSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_k8s_pod_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/k8s_pod_security_policy volterra_k8s_pod_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SPodSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: K8SPodSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_k8s_pod_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._yaml = config.yaml;
    this._pspSpec.internalValue = config.pspSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // yaml - computed: false, optional: true, required: false
  private _yaml?: string; 
  public get yaml() {
    return this.getStringAttribute('yaml');
  }
  public set yaml(value: string) {
    this._yaml = value;
  }
  public resetYaml() {
    this._yaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlInput() {
    return this._yaml;
  }

  // psp_spec - computed: false, optional: true, required: false
  private _pspSpec = new K8SPodSecurityPolicyPspSpecOutputReference(this, "psp_spec");
  public get pspSpec() {
    return this._pspSpec;
  }
  public putPspSpec(value: K8SPodSecurityPolicyPspSpec) {
    this._pspSpec.internalValue = value;
  }
  public resetPspSpec() {
    this._pspSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pspSpecInput() {
    return this._pspSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      yaml: cdktf.stringToTerraform(this._yaml),
      psp_spec: k8SPodSecurityPolicyPspSpecToTerraform(this._pspSpec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      yaml: {
        value: cdktf.stringToHclTerraform(this._yaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psp_spec: {
        value: k8SPodSecurityPolicyPspSpecToHclTerraform(this._pspSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SPodSecurityPolicyPspSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
