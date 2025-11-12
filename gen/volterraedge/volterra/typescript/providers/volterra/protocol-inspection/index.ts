// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtocolInspectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#action ProtocolInspection#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#annotations ProtocolInspection#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#description ProtocolInspection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#disable ProtocolInspection#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#id ProtocolInspection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#labels ProtocolInspection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#name ProtocolInspection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#namespace ProtocolInspection#namespace}
  */
  readonly namespace: string;
  /**
  * enable_disable_compliance_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#enable_disable_compliance_checks ProtocolInspection#enable_disable_compliance_checks}
  */
  readonly enableDisableComplianceChecks: ProtocolInspectionEnableDisableComplianceChecks;
  /**
  * enable_disable_signatures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#enable_disable_signatures ProtocolInspection#enable_disable_signatures}
  */
  readonly enableDisableSignatures: ProtocolInspectionEnableDisableSignatures;
}
export interface ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#name ProtocolInspection#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#namespace ProtocolInspection#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#tenant ProtocolInspection#tenant}
  */
  readonly tenant?: string;
}

export function protocolInspectionEnableDisableComplianceChecksEnableComplianceChecksToTerraform(struct?: ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecksOutputReference | ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function protocolInspectionEnableDisableComplianceChecksEnableComplianceChecksToHclTerraform(struct?: ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecksOutputReference | ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ProtocolInspectionEnableDisableComplianceChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#disable_compliance_checks ProtocolInspection#disable_compliance_checks}
  */
  readonly disableComplianceChecks?: boolean | cdktf.IResolvable;
  /**
  * enable_compliance_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#enable_compliance_checks ProtocolInspection#enable_compliance_checks}
  */
  readonly enableComplianceChecks?: ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecks;
}

export function protocolInspectionEnableDisableComplianceChecksToTerraform(struct?: ProtocolInspectionEnableDisableComplianceChecksOutputReference | ProtocolInspectionEnableDisableComplianceChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_compliance_checks: cdktf.booleanToTerraform(struct!.disableComplianceChecks),
    enable_compliance_checks: protocolInspectionEnableDisableComplianceChecksEnableComplianceChecksToTerraform(struct!.enableComplianceChecks),
  }
}


export function protocolInspectionEnableDisableComplianceChecksToHclTerraform(struct?: ProtocolInspectionEnableDisableComplianceChecksOutputReference | ProtocolInspectionEnableDisableComplianceChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_compliance_checks: {
      value: cdktf.booleanToHclTerraform(struct!.disableComplianceChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_compliance_checks: {
      value: protocolInspectionEnableDisableComplianceChecksEnableComplianceChecksToHclTerraform(struct!.enableComplianceChecks),
      isBlock: true,
      type: "list",
      storageClassType: "ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtocolInspectionEnableDisableComplianceChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtocolInspectionEnableDisableComplianceChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableComplianceChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableComplianceChecks = this._disableComplianceChecks;
    }
    if (this._enableComplianceChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComplianceChecks = this._enableComplianceChecks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolInspectionEnableDisableComplianceChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableComplianceChecks = undefined;
      this._enableComplianceChecks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableComplianceChecks = value.disableComplianceChecks;
      this._enableComplianceChecks.internalValue = value.enableComplianceChecks;
    }
  }

  // disable_compliance_checks - computed: false, optional: true, required: false
  private _disableComplianceChecks?: boolean | cdktf.IResolvable; 
  public get disableComplianceChecks() {
    return this.getBooleanAttribute('disable_compliance_checks');
  }
  public set disableComplianceChecks(value: boolean | cdktf.IResolvable) {
    this._disableComplianceChecks = value;
  }
  public resetDisableComplianceChecks() {
    this._disableComplianceChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableComplianceChecksInput() {
    return this._disableComplianceChecks;
  }

  // enable_compliance_checks - computed: false, optional: true, required: false
  private _enableComplianceChecks = new ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecksOutputReference(this, "enable_compliance_checks");
  public get enableComplianceChecks() {
    return this._enableComplianceChecks;
  }
  public putEnableComplianceChecks(value: ProtocolInspectionEnableDisableComplianceChecksEnableComplianceChecks) {
    this._enableComplianceChecks.internalValue = value;
  }
  public resetEnableComplianceChecks() {
    this._enableComplianceChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComplianceChecksInput() {
    return this._enableComplianceChecks.internalValue;
  }
}
export interface ProtocolInspectionEnableDisableSignatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#disable_signature ProtocolInspection#disable_signature}
  */
  readonly disableSignature?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#enable_signature ProtocolInspection#enable_signature}
  */
  readonly enableSignature?: boolean | cdktf.IResolvable;
}

export function protocolInspectionEnableDisableSignaturesToTerraform(struct?: ProtocolInspectionEnableDisableSignaturesOutputReference | ProtocolInspectionEnableDisableSignatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_signature: cdktf.booleanToTerraform(struct!.disableSignature),
    enable_signature: cdktf.booleanToTerraform(struct!.enableSignature),
  }
}


export function protocolInspectionEnableDisableSignaturesToHclTerraform(struct?: ProtocolInspectionEnableDisableSignaturesOutputReference | ProtocolInspectionEnableDisableSignatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_signature: {
      value: cdktf.booleanToHclTerraform(struct!.disableSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_signature: {
      value: cdktf.booleanToHclTerraform(struct!.enableSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtocolInspectionEnableDisableSignaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtocolInspectionEnableDisableSignatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSignature = this._disableSignature;
    }
    if (this._enableSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSignature = this._enableSignature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolInspectionEnableDisableSignatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableSignature = undefined;
      this._enableSignature = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableSignature = value.disableSignature;
      this._enableSignature = value.enableSignature;
    }
  }

  // disable_signature - computed: false, optional: true, required: false
  private _disableSignature?: boolean | cdktf.IResolvable; 
  public get disableSignature() {
    return this.getBooleanAttribute('disable_signature');
  }
  public set disableSignature(value: boolean | cdktf.IResolvable) {
    this._disableSignature = value;
  }
  public resetDisableSignature() {
    this._disableSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSignatureInput() {
    return this._disableSignature;
  }

  // enable_signature - computed: false, optional: true, required: false
  private _enableSignature?: boolean | cdktf.IResolvable; 
  public get enableSignature() {
    return this.getBooleanAttribute('enable_signature');
  }
  public set enableSignature(value: boolean | cdktf.IResolvable) {
    this._enableSignature = value;
  }
  public resetEnableSignature() {
    this._enableSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSignatureInput() {
    return this._enableSignature;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection volterra_protocol_inspection}
*/
export class ProtocolInspection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_protocol_inspection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtocolInspection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtocolInspection to import
  * @param importFromId The id of the existing ProtocolInspection that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtocolInspection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_protocol_inspection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/protocol_inspection volterra_protocol_inspection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtocolInspectionConfig
  */
  public constructor(scope: Construct, id: string, config: ProtocolInspectionConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_protocol_inspection',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._enableDisableComplianceChecks.internalValue = config.enableDisableComplianceChecks;
    this._enableDisableSignatures.internalValue = config.enableDisableSignatures;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // enable_disable_compliance_checks - computed: false, optional: false, required: true
  private _enableDisableComplianceChecks = new ProtocolInspectionEnableDisableComplianceChecksOutputReference(this, "enable_disable_compliance_checks");
  public get enableDisableComplianceChecks() {
    return this._enableDisableComplianceChecks;
  }
  public putEnableDisableComplianceChecks(value: ProtocolInspectionEnableDisableComplianceChecks) {
    this._enableDisableComplianceChecks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDisableComplianceChecksInput() {
    return this._enableDisableComplianceChecks.internalValue;
  }

  // enable_disable_signatures - computed: false, optional: false, required: true
  private _enableDisableSignatures = new ProtocolInspectionEnableDisableSignaturesOutputReference(this, "enable_disable_signatures");
  public get enableDisableSignatures() {
    return this._enableDisableSignatures;
  }
  public putEnableDisableSignatures(value: ProtocolInspectionEnableDisableSignatures) {
    this._enableDisableSignatures.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDisableSignaturesInput() {
    return this._enableDisableSignatures.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      enable_disable_compliance_checks: protocolInspectionEnableDisableComplianceChecksToTerraform(this._enableDisableComplianceChecks.internalValue),
      enable_disable_signatures: protocolInspectionEnableDisableSignaturesToTerraform(this._enableDisableSignatures.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      enable_disable_compliance_checks: {
        value: protocolInspectionEnableDisableComplianceChecksToHclTerraform(this._enableDisableComplianceChecks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtocolInspectionEnableDisableComplianceChecksList",
      },
      enable_disable_signatures: {
        value: protocolInspectionEnableDisableSignaturesToHclTerraform(this._enableDisableSignatures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtocolInspectionEnableDisableSignaturesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
