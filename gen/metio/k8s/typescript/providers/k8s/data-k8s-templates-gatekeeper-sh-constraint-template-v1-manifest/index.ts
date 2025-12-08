// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#metadata DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#metadata}
  */
  readonly metadata: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadata;
  /**
  * ConstraintTemplateSpec defines the desired state of ConstraintTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#spec DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#spec}
  */
  readonly spec?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpec;
}
export interface DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#annotations DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#labels DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#name DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadataToTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadataToHclTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#kind DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#short_names DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#short_names}
  */
  readonly shortNames?: string[];
}

export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNamesToTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    short_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shortNames),
  }
}


export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNamesToHclTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shortNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._shortNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortNames = this._shortNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._shortNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._shortNames = value.shortNames;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // short_names - computed: false, optional: true, required: false
  private _shortNames?: string[]; 
  public get shortNames() {
    return this.getListAttribute('short_names');
  }
  public set shortNames(value: string[]) {
    this._shortNames = value;
  }
  public resetShortNames() {
    this._shortNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNamesInput() {
    return this._shortNames;
  }
}
export interface DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#legacy_schema DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#legacy_schema}
  */
  readonly legacySchema?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#open_apiv3_schema DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#open_apiv3_schema}
  */
  readonly openApiv3Schema?: { [key: string]: string };
}

export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidationToTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    legacy_schema: cdktf.booleanToTerraform(struct!.legacySchema),
    open_apiv3_schema: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.openApiv3Schema),
  }
}


export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidationToHclTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    legacy_schema: {
      value: cdktf.booleanToHclTerraform(struct!.legacySchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_apiv3_schema: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.openApiv3Schema),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._legacySchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacySchema = this._legacySchema;
    }
    if (this._openApiv3Schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiv3Schema = this._openApiv3Schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._legacySchema = undefined;
      this._openApiv3Schema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._legacySchema = value.legacySchema;
      this._openApiv3Schema = value.openApiv3Schema;
    }
  }

  // legacy_schema - computed: false, optional: true, required: false
  private _legacySchema?: boolean | cdktf.IResolvable; 
  public get legacySchema() {
    return this.getBooleanAttribute('legacy_schema');
  }
  public set legacySchema(value: boolean | cdktf.IResolvable) {
    this._legacySchema = value;
  }
  public resetLegacySchema() {
    this._legacySchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacySchemaInput() {
    return this._legacySchema;
  }

  // open_apiv3_schema - computed: false, optional: true, required: false
  private _openApiv3Schema?: { [key: string]: string }; 
  public get openApiv3Schema() {
    return this.getStringMapAttribute('open_apiv3_schema');
  }
  public set openApiv3Schema(value: { [key: string]: string }) {
    this._openApiv3Schema = value;
  }
  public resetOpenApiv3Schema() {
    this._openApiv3Schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiv3SchemaInput() {
    return this._openApiv3Schema;
  }
}
export interface DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#names DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#names}
  */
  readonly names?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNames;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#validation DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#validation}
  */
  readonly validation?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidation;
}

export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecToTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNamesToTerraform(struct!.names),
    validation: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidationToTerraform(struct!.validation),
  }
}


export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecToHclTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNamesToHclTerraform(struct!.names),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNames",
    },
    validation: {
      value: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names.internalValue = value.names;
      this._validation.internalValue = value.validation;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names = new DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNamesOutputReference(this, "names");
  public get names() {
    return this._names;
  }
  public putNames(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecNames) {
    this._names.internalValue = value;
  }
  public resetNames() {
    this._names.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#spec DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#spec}
  */
  readonly spec?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpec;
}

export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdToTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecToTerraform(struct!.spec),
  }
}


export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdToHclTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCode {
  /**
  * The engine used to evaluate the code. Example: 'Rego'. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#engine DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#engine}
  */
  readonly engine: string;
  /**
  * The source code for the template. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#source DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#source}
  */
  readonly source: { [key: string]: string };
}

export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCodeToTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine: cdktf.stringToTerraform(struct!.engine),
    source: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.source),
  }
}


export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCodeToHclTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.source),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._engine = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._engine = value.engine;
      this._source = value.source;
    }
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // source - computed: false, optional: false, required: true
  private _source?: { [key: string]: string }; 
  public get source() {
    return this.getStringMapAttribute('source');
  }
  public set source(value: { [key: string]: string }) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCodeList extends cdktf.ComplexList {
  public internalValue? : DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCode[] | cdktf.IResolvable

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
  public get(index: number): DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCodeOutputReference {
    return new DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargets {
  /**
  * The source code options for the constraint template. 'Rego' can only be specified in one place (either here or in the 'rego' field)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#code DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#code}
  */
  readonly code?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCode[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#libs DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#libs}
  */
  readonly libs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#rego DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#rego}
  */
  readonly rego?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#target DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#target}
  */
  readonly target?: string;
}

export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsToTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.listMapper(dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCodeToTerraform, false)(struct!.code),
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    rego: cdktf.stringToTerraform(struct!.rego),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsToHclTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.listMapperHcl(dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCodeToHclTerraform, false)(struct!.code),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCodeList",
    },
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rego: {
      value: cdktf.stringToHclTerraform(struct!.rego),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code?.internalValue;
    }
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._rego !== undefined) {
      hasAnyValues = true;
      internalValueResult.rego = this._rego;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code.internalValue = undefined;
      this._libs = undefined;
      this._rego = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code.internalValue = value.code;
      this._libs = value.libs;
      this._rego = value.rego;
      this._target = value.target;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code = new DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCodeList(this, "code", false);
  public get code() {
    return this._code;
  }
  public putCode(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsCode[] | cdktf.IResolvable) {
    this._code.internalValue = value;
  }
  public resetCode() {
    this._code.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code.internalValue;
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // rego - computed: false, optional: true, required: false
  private _rego?: string; 
  public get rego() {
    return this.getStringAttribute('rego');
  }
  public set rego(value: string) {
    this._rego = value;
  }
  public resetRego() {
    this._rego = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regoInput() {
    return this._rego;
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
}

export class DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsList extends cdktf.ComplexList {
  public internalValue? : DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargets[] | cdktf.IResolvable

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
  public get(index: number): DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsOutputReference {
    return new DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#crd DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#crd}
  */
  readonly crd?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#targets DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest#targets}
  */
  readonly targets?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargets[] | cdktf.IResolvable;
}

export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecToTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crd: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdToTerraform(struct!.crd),
    targets: cdktf.listMapper(dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsToTerraform, false)(struct!.targets),
  }
}


export function dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecToHclTerraform(struct?: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crd: {
      value: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdToHclTerraform(struct!.crd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrd",
    },
    targets: {
      value: cdktf.listMapperHcl(dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crd = this._crd?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crd.internalValue = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crd.internalValue = value.crd;
      this._targets.internalValue = value.targets;
    }
  }

  // crd - computed: false, optional: true, required: false
  private _crd = new DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrdOutputReference(this, "crd");
  public get crd() {
    return this._crd;
  }
  public putCrd(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecCrd) {
    this._crd.internalValue = value;
  }
  public resetCrd() {
    this._crd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crdInput() {
    return this._crd.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest k8s_templates_gatekeeper_sh_constraint_template_v1_manifest}
*/
export class DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_templates_gatekeeper_sh_constraint_template_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest to import
  * @param importFromId The id of the existing DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STemplatesGatekeeperShConstraintTemplateV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_templates_gatekeeper_sh_constraint_template_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/templates_gatekeeper_sh_constraint_template_v1_manifest k8s_templates_gatekeeper_sh_constraint_template_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_templates_gatekeeper_sh_constraint_template_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpec) {
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
      metadata: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestMetadata",
      },
      spec: {
        value: dataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STemplatesGatekeeperShConstraintTemplateV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
