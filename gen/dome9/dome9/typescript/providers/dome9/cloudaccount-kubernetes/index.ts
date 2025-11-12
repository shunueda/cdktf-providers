// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudaccountKubernetesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#id CloudaccountKubernetes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#name CloudaccountKubernetes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#organizational_unit_id CloudaccountKubernetes#organizational_unit_id}
  */
  readonly organizationalUnitId?: string;
  /**
  * admission_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#admission_control CloudaccountKubernetes#admission_control}
  */
  readonly admissionControl?: CloudaccountKubernetesAdmissionControl;
  /**
  * image_assurance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#image_assurance CloudaccountKubernetes#image_assurance}
  */
  readonly imageAssurance?: CloudaccountKubernetesImageAssurance;
  /**
  * runtime_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#runtime_protection CloudaccountKubernetes#runtime_protection}
  */
  readonly runtimeProtection?: CloudaccountKubernetesRuntimeProtection;
  /**
  * threat_intelligence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#threat_intelligence CloudaccountKubernetes#threat_intelligence}
  */
  readonly threatIntelligence?: CloudaccountKubernetesThreatIntelligence;
}
export interface CloudaccountKubernetesAdmissionControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#enabled CloudaccountKubernetes#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cloudaccountKubernetesAdmissionControlToTerraform(struct?: CloudaccountKubernetesAdmissionControlOutputReference | CloudaccountKubernetesAdmissionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudaccountKubernetesAdmissionControlToHclTerraform(struct?: CloudaccountKubernetesAdmissionControlOutputReference | CloudaccountKubernetesAdmissionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudaccountKubernetesAdmissionControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudaccountKubernetesAdmissionControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccountKubernetesAdmissionControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CloudaccountKubernetesImageAssurance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#enabled CloudaccountKubernetes#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cloudaccountKubernetesImageAssuranceToTerraform(struct?: CloudaccountKubernetesImageAssuranceOutputReference | CloudaccountKubernetesImageAssurance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudaccountKubernetesImageAssuranceToHclTerraform(struct?: CloudaccountKubernetesImageAssuranceOutputReference | CloudaccountKubernetesImageAssurance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudaccountKubernetesImageAssuranceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudaccountKubernetesImageAssurance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccountKubernetesImageAssurance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CloudaccountKubernetesRuntimeProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#enabled CloudaccountKubernetes#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cloudaccountKubernetesRuntimeProtectionToTerraform(struct?: CloudaccountKubernetesRuntimeProtectionOutputReference | CloudaccountKubernetesRuntimeProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudaccountKubernetesRuntimeProtectionToHclTerraform(struct?: CloudaccountKubernetesRuntimeProtectionOutputReference | CloudaccountKubernetesRuntimeProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudaccountKubernetesRuntimeProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudaccountKubernetesRuntimeProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccountKubernetesRuntimeProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface CloudaccountKubernetesThreatIntelligence {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#enabled CloudaccountKubernetes#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cloudaccountKubernetesThreatIntelligenceToTerraform(struct?: CloudaccountKubernetesThreatIntelligenceOutputReference | CloudaccountKubernetesThreatIntelligence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudaccountKubernetesThreatIntelligenceToHclTerraform(struct?: CloudaccountKubernetesThreatIntelligenceOutputReference | CloudaccountKubernetesThreatIntelligence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudaccountKubernetesThreatIntelligenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudaccountKubernetesThreatIntelligence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudaccountKubernetesThreatIntelligence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes dome9_cloudaccount_kubernetes}
*/
export class CloudaccountKubernetes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_cloudaccount_kubernetes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudaccountKubernetes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudaccountKubernetes to import
  * @param importFromId The id of the existing CloudaccountKubernetes that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudaccountKubernetes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_cloudaccount_kubernetes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_kubernetes dome9_cloudaccount_kubernetes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudaccountKubernetesConfig
  */
  public constructor(scope: Construct, id: string, config: CloudaccountKubernetesConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_cloudaccount_kubernetes',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4',
        providerVersionConstraint: '1.40.4'
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
    this._name = config.name;
    this._organizationalUnitId = config.organizationalUnitId;
    this._admissionControl.internalValue = config.admissionControl;
    this._imageAssurance.internalValue = config.imageAssurance;
    this._runtimeProtection.internalValue = config.runtimeProtection;
    this._threatIntelligence.internalValue = config.threatIntelligence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_version - computed: true, optional: false, required: false
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
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

  // organizational_unit_id - computed: false, optional: true, required: false
  private _organizationalUnitId?: string; 
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }
  public set organizationalUnitId(value: string) {
    this._organizationalUnitId = value;
  }
  public resetOrganizationalUnitId() {
    this._organizationalUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdInput() {
    return this._organizationalUnitId;
  }

  // organizational_unit_name - computed: true, optional: false, required: false
  public get organizationalUnitName() {
    return this.getStringAttribute('organizational_unit_name');
  }

  // organizational_unit_path - computed: true, optional: false, required: false
  public get organizationalUnitPath() {
    return this.getStringAttribute('organizational_unit_path');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // admission_control - computed: false, optional: true, required: false
  private _admissionControl = new CloudaccountKubernetesAdmissionControlOutputReference(this, "admission_control");
  public get admissionControl() {
    return this._admissionControl;
  }
  public putAdmissionControl(value: CloudaccountKubernetesAdmissionControl) {
    this._admissionControl.internalValue = value;
  }
  public resetAdmissionControl() {
    this._admissionControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionControlInput() {
    return this._admissionControl.internalValue;
  }

  // image_assurance - computed: false, optional: true, required: false
  private _imageAssurance = new CloudaccountKubernetesImageAssuranceOutputReference(this, "image_assurance");
  public get imageAssurance() {
    return this._imageAssurance;
  }
  public putImageAssurance(value: CloudaccountKubernetesImageAssurance) {
    this._imageAssurance.internalValue = value;
  }
  public resetImageAssurance() {
    this._imageAssurance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageAssuranceInput() {
    return this._imageAssurance.internalValue;
  }

  // runtime_protection - computed: false, optional: true, required: false
  private _runtimeProtection = new CloudaccountKubernetesRuntimeProtectionOutputReference(this, "runtime_protection");
  public get runtimeProtection() {
    return this._runtimeProtection;
  }
  public putRuntimeProtection(value: CloudaccountKubernetesRuntimeProtection) {
    this._runtimeProtection.internalValue = value;
  }
  public resetRuntimeProtection() {
    this._runtimeProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeProtectionInput() {
    return this._runtimeProtection.internalValue;
  }

  // threat_intelligence - computed: false, optional: true, required: false
  private _threatIntelligence = new CloudaccountKubernetesThreatIntelligenceOutputReference(this, "threat_intelligence");
  public get threatIntelligence() {
    return this._threatIntelligence;
  }
  public putThreatIntelligence(value: CloudaccountKubernetesThreatIntelligence) {
    this._threatIntelligence.internalValue = value;
  }
  public resetThreatIntelligence() {
    this._threatIntelligence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelligenceInput() {
    return this._threatIntelligence.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organizational_unit_id: cdktf.stringToTerraform(this._organizationalUnitId),
      admission_control: cloudaccountKubernetesAdmissionControlToTerraform(this._admissionControl.internalValue),
      image_assurance: cloudaccountKubernetesImageAssuranceToTerraform(this._imageAssurance.internalValue),
      runtime_protection: cloudaccountKubernetesRuntimeProtectionToTerraform(this._runtimeProtection.internalValue),
      threat_intelligence: cloudaccountKubernetesThreatIntelligenceToTerraform(this._threatIntelligence.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit_id: {
        value: cdktf.stringToHclTerraform(this._organizationalUnitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admission_control: {
        value: cloudaccountKubernetesAdmissionControlToHclTerraform(this._admissionControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudaccountKubernetesAdmissionControlList",
      },
      image_assurance: {
        value: cloudaccountKubernetesImageAssuranceToHclTerraform(this._imageAssurance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudaccountKubernetesImageAssuranceList",
      },
      runtime_protection: {
        value: cloudaccountKubernetesRuntimeProtectionToHclTerraform(this._runtimeProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudaccountKubernetesRuntimeProtectionList",
      },
      threat_intelligence: {
        value: cloudaccountKubernetesThreatIntelligenceToHclTerraform(this._threatIntelligence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudaccountKubernetesThreatIntelligenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
