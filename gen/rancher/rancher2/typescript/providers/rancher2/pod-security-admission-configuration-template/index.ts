// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PodSecurityAdmissionConfigurationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#annotations PodSecurityAdmissionConfigurationTemplate#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Pod Security Admission Configuration template description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#description PodSecurityAdmissionConfigurationTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#id PodSecurityAdmissionConfigurationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#labels PodSecurityAdmissionConfigurationTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Pod Security Admission Configuration template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#name PodSecurityAdmissionConfigurationTemplate#name}
  */
  readonly name: string;
  /**
  * defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#defaults PodSecurityAdmissionConfigurationTemplate#defaults}
  */
  readonly defaults: PodSecurityAdmissionConfigurationTemplateDefaults;
  /**
  * exemptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#exemptions PodSecurityAdmissionConfigurationTemplate#exemptions}
  */
  readonly exemptions?: PodSecurityAdmissionConfigurationTemplateExemptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#timeouts PodSecurityAdmissionConfigurationTemplate#timeouts}
  */
  readonly timeouts?: PodSecurityAdmissionConfigurationTemplateTimeouts;
}
export interface PodSecurityAdmissionConfigurationTemplateDefaults {
  /**
  * Pod Security Admission Configuration audit. This audits a pod in violation of privileged, baseline, or restricted policy (default: privileged)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#audit PodSecurityAdmissionConfigurationTemplate#audit}
  */
  readonly audit?: string;
  /**
  * Pod Security Admission Configuration audit version (default: latest)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#audit_version PodSecurityAdmissionConfigurationTemplate#audit_version}
  */
  readonly auditVersion?: string;
  /**
  * Pod Security Admission Configuration enforce. This rejects a pod in violation of privileged, baseline, or restricted policy (default: privileged)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#enforce PodSecurityAdmissionConfigurationTemplate#enforce}
  */
  readonly enforce?: string;
  /**
  * Pod Security Admission Configuration enforce version (default: latest)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#enforce_version PodSecurityAdmissionConfigurationTemplate#enforce_version}
  */
  readonly enforceVersion?: string;
  /**
  * Pod Security Admission Configuration warn. This warns the user about a pod in violation of privileged, baseline, or restricted policy (default: privileged)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#warn PodSecurityAdmissionConfigurationTemplate#warn}
  */
  readonly warn?: string;
  /**
  * Pod Security Admission Configuration warn version (default: latest)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#warn_version PodSecurityAdmissionConfigurationTemplate#warn_version}
  */
  readonly warnVersion?: string;
}

export function podSecurityAdmissionConfigurationTemplateDefaultsToTerraform(struct?: PodSecurityAdmissionConfigurationTemplateDefaultsOutputReference | PodSecurityAdmissionConfigurationTemplateDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.stringToTerraform(struct!.audit),
    audit_version: cdktf.stringToTerraform(struct!.auditVersion),
    enforce: cdktf.stringToTerraform(struct!.enforce),
    enforce_version: cdktf.stringToTerraform(struct!.enforceVersion),
    warn: cdktf.stringToTerraform(struct!.warn),
    warn_version: cdktf.stringToTerraform(struct!.warnVersion),
  }
}


export function podSecurityAdmissionConfigurationTemplateDefaultsToHclTerraform(struct?: PodSecurityAdmissionConfigurationTemplateDefaultsOutputReference | PodSecurityAdmissionConfigurationTemplateDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit: {
      value: cdktf.stringToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_version: {
      value: cdktf.stringToHclTerraform(struct!.auditVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce: {
      value: cdktf.stringToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_version: {
      value: cdktf.stringToHclTerraform(struct!.enforceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warn: {
      value: cdktf.stringToHclTerraform(struct!.warn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warn_version: {
      value: cdktf.stringToHclTerraform(struct!.warnVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PodSecurityAdmissionConfigurationTemplateDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PodSecurityAdmissionConfigurationTemplateDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._auditVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditVersion = this._auditVersion;
    }
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._enforceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceVersion = this._enforceVersion;
    }
    if (this._warn !== undefined) {
      hasAnyValues = true;
      internalValueResult.warn = this._warn;
    }
    if (this._warnVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.warnVersion = this._warnVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityAdmissionConfigurationTemplateDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._auditVersion = undefined;
      this._enforce = undefined;
      this._enforceVersion = undefined;
      this._warn = undefined;
      this._warnVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._auditVersion = value.auditVersion;
      this._enforce = value.enforce;
      this._enforceVersion = value.enforceVersion;
      this._warn = value.warn;
      this._warnVersion = value.warnVersion;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: string; 
  public get audit() {
    return this.getStringAttribute('audit');
  }
  public set audit(value: string) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // audit_version - computed: false, optional: true, required: false
  private _auditVersion?: string; 
  public get auditVersion() {
    return this.getStringAttribute('audit_version');
  }
  public set auditVersion(value: string) {
    this._auditVersion = value;
  }
  public resetAuditVersion() {
    this._auditVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditVersionInput() {
    return this._auditVersion;
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: string; 
  public get enforce() {
    return this.getStringAttribute('enforce');
  }
  public set enforce(value: string) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // enforce_version - computed: false, optional: true, required: false
  private _enforceVersion?: string; 
  public get enforceVersion() {
    return this.getStringAttribute('enforce_version');
  }
  public set enforceVersion(value: string) {
    this._enforceVersion = value;
  }
  public resetEnforceVersion() {
    this._enforceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceVersionInput() {
    return this._enforceVersion;
  }

  // warn - computed: false, optional: true, required: false
  private _warn?: string; 
  public get warn() {
    return this.getStringAttribute('warn');
  }
  public set warn(value: string) {
    this._warn = value;
  }
  public resetWarn() {
    this._warn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnInput() {
    return this._warn;
  }

  // warn_version - computed: false, optional: true, required: false
  private _warnVersion?: string; 
  public get warnVersion() {
    return this.getStringAttribute('warn_version');
  }
  public set warnVersion(value: string) {
    this._warnVersion = value;
  }
  public resetWarnVersion() {
    this._warnVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnVersionInput() {
    return this._warnVersion;
  }
}
export interface PodSecurityAdmissionConfigurationTemplateExemptions {
  /**
  * Pod Security Admission Configuration namespace exemptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#namespaces PodSecurityAdmissionConfigurationTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Pod Security Admission Configuration runtime class exemptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#runtime_classes PodSecurityAdmissionConfigurationTemplate#runtime_classes}
  */
  readonly runtimeClasses?: string[];
  /**
  * Pod Security Admission Configuration username exemptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#usernames PodSecurityAdmissionConfigurationTemplate#usernames}
  */
  readonly usernames?: string[];
}

export function podSecurityAdmissionConfigurationTemplateExemptionsToTerraform(struct?: PodSecurityAdmissionConfigurationTemplateExemptionsOutputReference | PodSecurityAdmissionConfigurationTemplateExemptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    runtime_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runtimeClasses),
    usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usernames),
  }
}


export function podSecurityAdmissionConfigurationTemplateExemptionsToHclTerraform(struct?: PodSecurityAdmissionConfigurationTemplateExemptionsOutputReference | PodSecurityAdmissionConfigurationTemplateExemptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    runtime_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.runtimeClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    usernames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usernames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PodSecurityAdmissionConfigurationTemplateExemptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PodSecurityAdmissionConfigurationTemplateExemptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._runtimeClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClasses = this._runtimeClasses;
    }
    if (this._usernames !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernames = this._usernames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityAdmissionConfigurationTemplateExemptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._runtimeClasses = undefined;
      this._usernames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._runtimeClasses = value.runtimeClasses;
      this._usernames = value.usernames;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // runtime_classes - computed: false, optional: true, required: false
  private _runtimeClasses?: string[]; 
  public get runtimeClasses() {
    return this.getListAttribute('runtime_classes');
  }
  public set runtimeClasses(value: string[]) {
    this._runtimeClasses = value;
  }
  public resetRuntimeClasses() {
    this._runtimeClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassesInput() {
    return this._runtimeClasses;
  }

  // usernames - computed: false, optional: true, required: false
  private _usernames?: string[]; 
  public get usernames() {
    return this.getListAttribute('usernames');
  }
  public set usernames(value: string[]) {
    this._usernames = value;
  }
  public resetUsernames() {
    this._usernames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamesInput() {
    return this._usernames;
  }
}
export interface PodSecurityAdmissionConfigurationTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#create PodSecurityAdmissionConfigurationTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#delete PodSecurityAdmissionConfigurationTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#update PodSecurityAdmissionConfigurationTemplate#update}
  */
  readonly update?: string;
}

export function podSecurityAdmissionConfigurationTemplateTimeoutsToTerraform(struct?: PodSecurityAdmissionConfigurationTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function podSecurityAdmissionConfigurationTemplateTimeoutsToHclTerraform(struct?: PodSecurityAdmissionConfigurationTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class PodSecurityAdmissionConfigurationTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PodSecurityAdmissionConfigurationTemplateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PodSecurityAdmissionConfigurationTemplateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template rancher2_pod_security_admission_configuration_template}
*/
export class PodSecurityAdmissionConfigurationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_pod_security_admission_configuration_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PodSecurityAdmissionConfigurationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PodSecurityAdmissionConfigurationTemplate to import
  * @param importFromId The id of the existing PodSecurityAdmissionConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PodSecurityAdmissionConfigurationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_pod_security_admission_configuration_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/pod_security_admission_configuration_template rancher2_pod_security_admission_configuration_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PodSecurityAdmissionConfigurationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PodSecurityAdmissionConfigurationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_pod_security_admission_configuration_template',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '8.3.1'
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
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._defaults.internalValue = config.defaults;
    this._exemptions.internalValue = config.exemptions;
    this._timeouts.internalValue = config.timeouts;
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

  // defaults - computed: false, optional: false, required: true
  private _defaults = new PodSecurityAdmissionConfigurationTemplateDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: PodSecurityAdmissionConfigurationTemplateDefaults) {
    this._defaults.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }

  // exemptions - computed: false, optional: true, required: false
  private _exemptions = new PodSecurityAdmissionConfigurationTemplateExemptionsOutputReference(this, "exemptions");
  public get exemptions() {
    return this._exemptions;
  }
  public putExemptions(value: PodSecurityAdmissionConfigurationTemplateExemptions) {
    this._exemptions.internalValue = value;
  }
  public resetExemptions() {
    this._exemptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptionsInput() {
    return this._exemptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PodSecurityAdmissionConfigurationTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PodSecurityAdmissionConfigurationTemplateTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      defaults: podSecurityAdmissionConfigurationTemplateDefaultsToTerraform(this._defaults.internalValue),
      exemptions: podSecurityAdmissionConfigurationTemplateExemptionsToTerraform(this._exemptions.internalValue),
      timeouts: podSecurityAdmissionConfigurationTemplateTimeoutsToTerraform(this._timeouts.internalValue),
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
      defaults: {
        value: podSecurityAdmissionConfigurationTemplateDefaultsToHclTerraform(this._defaults.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PodSecurityAdmissionConfigurationTemplateDefaultsList",
      },
      exemptions: {
        value: podSecurityAdmissionConfigurationTemplateExemptionsToHclTerraform(this._exemptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PodSecurityAdmissionConfigurationTemplateExemptionsList",
      },
      timeouts: {
        value: podSecurityAdmissionConfigurationTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PodSecurityAdmissionConfigurationTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
