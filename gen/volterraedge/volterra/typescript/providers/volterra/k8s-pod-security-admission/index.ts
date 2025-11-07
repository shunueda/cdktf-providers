// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SPodSecurityAdmissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#annotations K8SPodSecurityAdmission#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#description K8SPodSecurityAdmission#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#disable K8SPodSecurityAdmission#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#id K8SPodSecurityAdmission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#labels K8SPodSecurityAdmission#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#name K8SPodSecurityAdmission#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#namespace K8SPodSecurityAdmission#namespace}
  */
  readonly namespace: string;
  /**
  * pod_security_admission_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#pod_security_admission_specs K8SPodSecurityAdmission#pod_security_admission_specs}
  */
  readonly podSecurityAdmissionSpecs: K8SPodSecurityAdmissionPodSecurityAdmissionSpecs[] | cdktf.IResolvable;
}
export interface K8SPodSecurityAdmissionPodSecurityAdmissionSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#audit K8SPodSecurityAdmission#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#baseline K8SPodSecurityAdmission#baseline}
  */
  readonly baseline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#enforce K8SPodSecurityAdmission#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#privileged K8SPodSecurityAdmission#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#restricted K8SPodSecurityAdmission#restricted}
  */
  readonly restricted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#warn K8SPodSecurityAdmission#warn}
  */
  readonly warn?: boolean | cdktf.IResolvable;
}

export function k8SPodSecurityAdmissionPodSecurityAdmissionSpecsToTerraform(struct?: K8SPodSecurityAdmissionPodSecurityAdmissionSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    baseline: cdktf.booleanToTerraform(struct!.baseline),
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    restricted: cdktf.booleanToTerraform(struct!.restricted),
    warn: cdktf.booleanToTerraform(struct!.warn),
  }
}


export function k8SPodSecurityAdmissionPodSecurityAdmissionSpecsToHclTerraform(struct?: K8SPodSecurityAdmissionPodSecurityAdmissionSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    baseline: {
      value: cdktf.booleanToHclTerraform(struct!.baseline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
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
    restricted: {
      value: cdktf.booleanToHclTerraform(struct!.restricted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warn: {
      value: cdktf.booleanToHclTerraform(struct!.warn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SPodSecurityAdmissionPodSecurityAdmissionSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SPodSecurityAdmissionPodSecurityAdmissionSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._baseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseline = this._baseline;
    }
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._restricted !== undefined) {
      hasAnyValues = true;
      internalValueResult.restricted = this._restricted;
    }
    if (this._warn !== undefined) {
      hasAnyValues = true;
      internalValueResult.warn = this._warn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SPodSecurityAdmissionPodSecurityAdmissionSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audit = undefined;
      this._baseline = undefined;
      this._enforce = undefined;
      this._privileged = undefined;
      this._restricted = undefined;
      this._warn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audit = value.audit;
      this._baseline = value.baseline;
      this._enforce = value.enforce;
      this._privileged = value.privileged;
      this._restricted = value.restricted;
      this._warn = value.warn;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // baseline - computed: false, optional: true, required: false
  private _baseline?: boolean | cdktf.IResolvable; 
  public get baseline() {
    return this.getBooleanAttribute('baseline');
  }
  public set baseline(value: boolean | cdktf.IResolvable) {
    this._baseline = value;
  }
  public resetBaseline() {
    this._baseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineInput() {
    return this._baseline;
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
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

  // restricted - computed: false, optional: true, required: false
  private _restricted?: boolean | cdktf.IResolvable; 
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }
  public set restricted(value: boolean | cdktf.IResolvable) {
    this._restricted = value;
  }
  public resetRestricted() {
    this._restricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedInput() {
    return this._restricted;
  }

  // warn - computed: false, optional: true, required: false
  private _warn?: boolean | cdktf.IResolvable; 
  public get warn() {
    return this.getBooleanAttribute('warn');
  }
  public set warn(value: boolean | cdktf.IResolvable) {
    this._warn = value;
  }
  public resetWarn() {
    this._warn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnInput() {
    return this._warn;
  }
}

export class K8SPodSecurityAdmissionPodSecurityAdmissionSpecsList extends cdktf.ComplexList {
  public internalValue? : K8SPodSecurityAdmissionPodSecurityAdmissionSpecs[] | cdktf.IResolvable

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
  public get(index: number): K8SPodSecurityAdmissionPodSecurityAdmissionSpecsOutputReference {
    return new K8SPodSecurityAdmissionPodSecurityAdmissionSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission volterra_k8s_pod_security_admission}
*/
export class K8SPodSecurityAdmission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_k8s_pod_security_admission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SPodSecurityAdmission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SPodSecurityAdmission to import
  * @param importFromId The id of the existing K8SPodSecurityAdmission that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SPodSecurityAdmission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_k8s_pod_security_admission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/k8s_pod_security_admission volterra_k8s_pod_security_admission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SPodSecurityAdmissionConfig
  */
  public constructor(scope: Construct, id: string, config: K8SPodSecurityAdmissionConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_k8s_pod_security_admission',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
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
    this._podSecurityAdmissionSpecs.internalValue = config.podSecurityAdmissionSpecs;
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

  // pod_security_admission_specs - computed: false, optional: false, required: true
  private _podSecurityAdmissionSpecs = new K8SPodSecurityAdmissionPodSecurityAdmissionSpecsList(this, "pod_security_admission_specs", false);
  public get podSecurityAdmissionSpecs() {
    return this._podSecurityAdmissionSpecs;
  }
  public putPodSecurityAdmissionSpecs(value: K8SPodSecurityAdmissionPodSecurityAdmissionSpecs[] | cdktf.IResolvable) {
    this._podSecurityAdmissionSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityAdmissionSpecsInput() {
    return this._podSecurityAdmissionSpecs.internalValue;
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
      pod_security_admission_specs: cdktf.listMapper(k8SPodSecurityAdmissionPodSecurityAdmissionSpecsToTerraform, true)(this._podSecurityAdmissionSpecs.internalValue),
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
      pod_security_admission_specs: {
        value: cdktf.listMapperHcl(k8SPodSecurityAdmissionPodSecurityAdmissionSpecsToHclTerraform, true)(this._podSecurityAdmissionSpecs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SPodSecurityAdmissionPodSecurityAdmissionSpecsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
