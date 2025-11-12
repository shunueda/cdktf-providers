// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/pod_security_admission_configuration_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRancher2PodSecurityAdmissionConfigurationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations of the Pod Security Admission Configuration Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/pod_security_admission_configuration_template#annotations DataRancher2PodSecurityAdmissionConfigurationTemplate#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/pod_security_admission_configuration_template#id DataRancher2PodSecurityAdmissionConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of the Pod Security Admission Configuration Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/pod_security_admission_configuration_template#labels DataRancher2PodSecurityAdmissionConfigurationTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Pod Security Admission Configuration Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/pod_security_admission_configuration_template#name DataRancher2PodSecurityAdmissionConfigurationTemplate#name}
  */
  readonly name: string;
}
export interface DataRancher2PodSecurityAdmissionConfigurationTemplateDefaults {
}

export function dataRancher2PodSecurityAdmissionConfigurationTemplateDefaultsToTerraform(struct?: DataRancher2PodSecurityAdmissionConfigurationTemplateDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2PodSecurityAdmissionConfigurationTemplateDefaultsToHclTerraform(struct?: DataRancher2PodSecurityAdmissionConfigurationTemplateDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2PodSecurityAdmissionConfigurationTemplateDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRancher2PodSecurityAdmissionConfigurationTemplateDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2PodSecurityAdmissionConfigurationTemplateDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit - computed: true, optional: false, required: false
  public get audit() {
    return this.getStringAttribute('audit');
  }

  // audit_version - computed: true, optional: false, required: false
  public get auditVersion() {
    return this.getStringAttribute('audit_version');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getStringAttribute('enforce');
  }

  // enforce_version - computed: true, optional: false, required: false
  public get enforceVersion() {
    return this.getStringAttribute('enforce_version');
  }

  // warn - computed: true, optional: false, required: false
  public get warn() {
    return this.getStringAttribute('warn');
  }

  // warn_version - computed: true, optional: false, required: false
  public get warnVersion() {
    return this.getStringAttribute('warn_version');
  }
}

export class DataRancher2PodSecurityAdmissionConfigurationTemplateDefaultsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2PodSecurityAdmissionConfigurationTemplateDefaultsOutputReference {
    return new DataRancher2PodSecurityAdmissionConfigurationTemplateDefaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2PodSecurityAdmissionConfigurationTemplateExemptions {
}

export function dataRancher2PodSecurityAdmissionConfigurationTemplateExemptionsToTerraform(struct?: DataRancher2PodSecurityAdmissionConfigurationTemplateExemptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2PodSecurityAdmissionConfigurationTemplateExemptionsToHclTerraform(struct?: DataRancher2PodSecurityAdmissionConfigurationTemplateExemptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2PodSecurityAdmissionConfigurationTemplateExemptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRancher2PodSecurityAdmissionConfigurationTemplateExemptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2PodSecurityAdmissionConfigurationTemplateExemptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // runtime_classes - computed: true, optional: false, required: false
  public get runtimeClasses() {
    return this.getListAttribute('runtime_classes');
  }

  // usernames - computed: true, optional: false, required: false
  public get usernames() {
    return this.getListAttribute('usernames');
  }
}

export class DataRancher2PodSecurityAdmissionConfigurationTemplateExemptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2PodSecurityAdmissionConfigurationTemplateExemptionsOutputReference {
    return new DataRancher2PodSecurityAdmissionConfigurationTemplateExemptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/pod_security_admission_configuration_template rancher2_pod_security_admission_configuration_template}
*/
export class DataRancher2PodSecurityAdmissionConfigurationTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_pod_security_admission_configuration_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRancher2PodSecurityAdmissionConfigurationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRancher2PodSecurityAdmissionConfigurationTemplate to import
  * @param importFromId The id of the existing DataRancher2PodSecurityAdmissionConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/pod_security_admission_configuration_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRancher2PodSecurityAdmissionConfigurationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_pod_security_admission_configuration_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/pod_security_admission_configuration_template rancher2_pod_security_admission_configuration_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRancher2PodSecurityAdmissionConfigurationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataRancher2PodSecurityAdmissionConfigurationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_pod_security_admission_configuration_template',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '8.3.1',
        providerVersionConstraint: '8.3.1'
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
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: true, required: false
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

  // defaults - computed: true, optional: false, required: false
  private _defaults = new DataRancher2PodSecurityAdmissionConfigurationTemplateDefaultsList(this, "defaults", false);
  public get defaults() {
    return this._defaults;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exemptions - computed: true, optional: false, required: false
  private _exemptions = new DataRancher2PodSecurityAdmissionConfigurationTemplateExemptionsList(this, "exemptions", false);
  public get exemptions() {
    return this._exemptions;
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

  // labels - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
