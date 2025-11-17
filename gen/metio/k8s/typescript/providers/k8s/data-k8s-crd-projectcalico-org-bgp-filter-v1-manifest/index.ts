// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#metadata DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadata;
  /**
  * BGPFilterSpec contains the IPv4 and IPv6 filter rules of the BGP Filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#spec DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#annotations DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#labels DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#name DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

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
}
export interface DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#max DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#min DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#min}
  */
  readonly min?: number;
}

export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLengthToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLengthToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLength | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLength | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#action DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#cidr DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#interface DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#match_operator DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#match_operator}
  */
  readonly matchOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#prefix_length DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#prefix_length}
  */
  readonly prefixLength?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLength;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#source DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#source}
  */
  readonly source?: string;
}

export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4ToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    interface: cdktf.stringToTerraform(struct!.interface),
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
    prefix_length: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLengthToTerraform(struct!.prefixLength),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4ToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_operator: {
      value: cdktf.stringToHclTerraform(struct!.matchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLengthToHclTerraform(struct!.prefixLength),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLength",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    if (this._prefixLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cidr = undefined;
      this._interface = undefined;
      this._matchOperator = undefined;
      this._prefixLength.internalValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cidr = value.cidr;
      this._interface = value.interface;
      this._matchOperator = value.matchOperator;
      this._prefixLength.internalValue = value.prefixLength;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // match_operator - computed: false, optional: true, required: false
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  public resetMatchOperator() {
    this._matchOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength = new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLengthOutputReference(this, "prefix_length");
  public get prefixLength() {
    return this._prefixLength;
  }
  public putPrefixLength(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4PrefixLength) {
    this._prefixLength.internalValue = value;
  }
  public resetPrefixLength() {
    this._prefixLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4List extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4OutputReference {
    return new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#max DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#min DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#min}
  */
  readonly min?: number;
}

export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLengthToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLengthToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLength | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLength | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#action DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#cidr DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#interface DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#match_operator DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#match_operator}
  */
  readonly matchOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#prefix_length DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#prefix_length}
  */
  readonly prefixLength?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLength;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#source DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#source}
  */
  readonly source?: string;
}

export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6ToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    interface: cdktf.stringToTerraform(struct!.interface),
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
    prefix_length: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLengthToTerraform(struct!.prefixLength),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6ToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_operator: {
      value: cdktf.stringToHclTerraform(struct!.matchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLengthToHclTerraform(struct!.prefixLength),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLength",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    if (this._prefixLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cidr = undefined;
      this._interface = undefined;
      this._matchOperator = undefined;
      this._prefixLength.internalValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cidr = value.cidr;
      this._interface = value.interface;
      this._matchOperator = value.matchOperator;
      this._prefixLength.internalValue = value.prefixLength;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // match_operator - computed: false, optional: true, required: false
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  public resetMatchOperator() {
    this._matchOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength = new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLengthOutputReference(this, "prefix_length");
  public get prefixLength() {
    return this._prefixLength;
  }
  public putPrefixLength(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6PrefixLength) {
    this._prefixLength.internalValue = value;
  }
  public resetPrefixLength() {
    this._prefixLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6List extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6OutputReference {
    return new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#max DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#min DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#min}
  */
  readonly min?: number;
}

export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLengthToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLengthToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLength | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLength | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#action DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#cidr DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#interface DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#match_operator DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#match_operator}
  */
  readonly matchOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#prefix_length DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#prefix_length}
  */
  readonly prefixLength?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLength;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#source DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#source}
  */
  readonly source?: string;
}

export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4ToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    interface: cdktf.stringToTerraform(struct!.interface),
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
    prefix_length: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLengthToTerraform(struct!.prefixLength),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4ToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_operator: {
      value: cdktf.stringToHclTerraform(struct!.matchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLengthToHclTerraform(struct!.prefixLength),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLength",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    if (this._prefixLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cidr = undefined;
      this._interface = undefined;
      this._matchOperator = undefined;
      this._prefixLength.internalValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cidr = value.cidr;
      this._interface = value.interface;
      this._matchOperator = value.matchOperator;
      this._prefixLength.internalValue = value.prefixLength;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // match_operator - computed: false, optional: true, required: false
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  public resetMatchOperator() {
    this._matchOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength = new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLengthOutputReference(this, "prefix_length");
  public get prefixLength() {
    return this._prefixLength;
  }
  public putPrefixLength(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4PrefixLength) {
    this._prefixLength.internalValue = value;
  }
  public resetPrefixLength() {
    this._prefixLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4List extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4OutputReference {
    return new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#max DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#min DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#min}
  */
  readonly min?: number;
}

export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLengthToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLengthToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLength | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLength | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#action DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#cidr DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#interface DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#match_operator DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#match_operator}
  */
  readonly matchOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#prefix_length DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#prefix_length}
  */
  readonly prefixLength?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLength;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#source DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#source}
  */
  readonly source?: string;
}

export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6ToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    interface: cdktf.stringToTerraform(struct!.interface),
    match_operator: cdktf.stringToTerraform(struct!.matchOperator),
    prefix_length: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLengthToTerraform(struct!.prefixLength),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6ToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_operator: {
      value: cdktf.stringToHclTerraform(struct!.matchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLengthToHclTerraform(struct!.prefixLength),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLength",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._matchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperator = this._matchOperator;
    }
    if (this._prefixLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._cidr = undefined;
      this._interface = undefined;
      this._matchOperator = undefined;
      this._prefixLength.internalValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._cidr = value.cidr;
      this._interface = value.interface;
      this._matchOperator = value.matchOperator;
      this._prefixLength.internalValue = value.prefixLength;
      this._source = value.source;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // match_operator - computed: false, optional: true, required: false
  private _matchOperator?: string; 
  public get matchOperator() {
    return this.getStringAttribute('match_operator');
  }
  public set matchOperator(value: string) {
    this._matchOperator = value;
  }
  public resetMatchOperator() {
    this._matchOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperatorInput() {
    return this._matchOperator;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength = new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLengthOutputReference(this, "prefix_length");
  public get prefixLength() {
    return this._prefixLength;
  }
  public putPrefixLength(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6PrefixLength) {
    this._prefixLength.internalValue = value;
  }
  public resetPrefixLength() {
    this._prefixLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6List extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6OutputReference {
    return new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpec {
  /**
  * The ordered set of IPv4 BGPFilter rules acting on exporting routes to a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#export_v4 DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#export_v4}
  */
  readonly exportV4?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4[] | cdktf.IResolvable;
  /**
  * The ordered set of IPv6 BGPFilter rules acting on exporting routes to a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#export_v6 DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#export_v6}
  */
  readonly exportV6?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6[] | cdktf.IResolvable;
  /**
  * The ordered set of IPv4 BGPFilter rules acting on importing routes from a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#import_v4 DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#import_v4}
  */
  readonly importV4?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4[] | cdktf.IResolvable;
  /**
  * The ordered set of IPv6 BGPFilter rules acting on importing routes from a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#import_v6 DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest#import_v6}
  */
  readonly importV6?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6[] | cdktf.IResolvable;
}

export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_v4: cdktf.listMapper(dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4ToTerraform, false)(struct!.exportV4),
    export_v6: cdktf.listMapper(dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6ToTerraform, false)(struct!.exportV6),
    import_v4: cdktf.listMapper(dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4ToTerraform, false)(struct!.importV4),
    import_v6: cdktf.listMapper(dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6ToTerraform, false)(struct!.importV6),
  }
}


export function dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_v4: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4ToHclTerraform, false)(struct!.exportV4),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4List",
    },
    export_v6: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6ToHclTerraform, false)(struct!.exportV6),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6List",
    },
    import_v4: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4ToHclTerraform, false)(struct!.importV4),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4List",
    },
    import_v6: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6ToHclTerraform, false)(struct!.importV6),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportV4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportV4 = this._exportV4?.internalValue;
    }
    if (this._exportV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportV6 = this._exportV6?.internalValue;
    }
    if (this._importV4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importV4 = this._importV4?.internalValue;
    }
    if (this._importV6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importV6 = this._importV6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportV4.internalValue = undefined;
      this._exportV6.internalValue = undefined;
      this._importV4.internalValue = undefined;
      this._importV6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportV4.internalValue = value.exportV4;
      this._exportV6.internalValue = value.exportV6;
      this._importV4.internalValue = value.importV4;
      this._importV6.internalValue = value.importV6;
    }
  }

  // export_v4 - computed: false, optional: true, required: false
  private _exportV4 = new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4List(this, "export_v4", false);
  public get exportV4() {
    return this._exportV4;
  }
  public putExportV4(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV4[] | cdktf.IResolvable) {
    this._exportV4.internalValue = value;
  }
  public resetExportV4() {
    this._exportV4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportV4Input() {
    return this._exportV4.internalValue;
  }

  // export_v6 - computed: false, optional: true, required: false
  private _exportV6 = new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6List(this, "export_v6", false);
  public get exportV6() {
    return this._exportV6;
  }
  public putExportV6(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecExportV6[] | cdktf.IResolvable) {
    this._exportV6.internalValue = value;
  }
  public resetExportV6() {
    this._exportV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportV6Input() {
    return this._exportV6.internalValue;
  }

  // import_v4 - computed: false, optional: true, required: false
  private _importV4 = new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4List(this, "import_v4", false);
  public get importV4() {
    return this._importV4;
  }
  public putImportV4(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV4[] | cdktf.IResolvable) {
    this._importV4.internalValue = value;
  }
  public resetImportV4() {
    this._importV4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importV4Input() {
    return this._importV4.internalValue;
  }

  // import_v6 - computed: false, optional: true, required: false
  private _importV6 = new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6List(this, "import_v6", false);
  public get importV6() {
    return this._importV6;
  }
  public putImportV6(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecImportV6[] | cdktf.IResolvable) {
    this._importV6.internalValue = value;
  }
  public resetImportV6() {
    this._importV6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importV6Input() {
    return this._importV6.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest k8s_crd_projectcalico_org_bgp_filter_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_bgp_filter_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgBgpFilterV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_bgp_filter_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_bgp_filter_v1_manifest k8s_crd_projectcalico_org_bgp_filter_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_bgp_filter_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgBgpFilterV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
