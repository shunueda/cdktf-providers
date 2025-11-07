// https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply only. In other words, it does not delete resource in any case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#apply_only Manifest#apply_only}
  */
  readonly applyOnly?: boolean | cdktf.IResolvable;
  /**
  * Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#force_conflicts Manifest#force_conflicts}
  */
  readonly forceConflicts?: boolean | cdktf.IResolvable;
  /**
  * Default to update in-place. Setting to true will delete and create the kubernetes instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#force_new Manifest#force_new}
  */
  readonly forceNew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#id Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of yaml keys to ignore changes to. Set these for fields set by Operators or other processes in kubernetes and as such you don't want to update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#ignore_fields Manifest#ignore_fields}
  */
  readonly ignoreFields?: string[];
  /**
  * Override the namespace to apply the kubernetes resource to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#override_namespace Manifest#override_namespace}
  */
  readonly overrideNamespace?: string;
  /**
  * List of yaml keys with sensitive values. Set these for fields which you want obfuscated in the yaml_body output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#sensitive_fields Manifest#sensitive_fields}
  */
  readonly sensitiveFields?: string[];
  /**
  * Default to client-side-apply. Setting to true will use server-side apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#server_side_apply Manifest#server_side_apply}
  */
  readonly serverSideApply?: boolean | cdktf.IResolvable;
  /**
  * Default to true (validate). Set this flag to not validate the yaml schema before appying.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#validate_schema Manifest#validate_schema}
  */
  readonly validateSchema?: boolean | cdktf.IResolvable;
  /**
  * Default to false (not waiting). Set this flag to wait or not for any deleted resources to be gone. This waits for finalizers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#wait Manifest#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * Default to true (waiting). Set this flag to wait or not for Deployments and APIService to complete rollout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#wait_for_rollout Manifest#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#yaml_body Manifest#yaml_body}
  */
  readonly yamlBody: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#timeouts Manifest#timeouts}
  */
  readonly timeouts?: ManifestTimeouts;
}
export interface ManifestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#create Manifest#create}
  */
  readonly create?: string;
}

export function manifestTimeoutsToTerraform(struct?: ManifestTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function manifestTimeoutsToHclTerraform(struct?: ManifestTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManifestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManifestTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManifestTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest kubectl_manifest}
*/
export class Manifest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubectl_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Manifest to import
  * @param importFromId The id of the existing Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubectl_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.19.0/docs/resources/manifest kubectl_manifest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'kubectl_manifest',
      terraformGeneratorMetadata: {
        providerName: 'kubectl',
        providerVersion: '1.19.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyOnly = config.applyOnly;
    this._forceConflicts = config.forceConflicts;
    this._forceNew = config.forceNew;
    this._id = config.id;
    this._ignoreFields = config.ignoreFields;
    this._overrideNamespace = config.overrideNamespace;
    this._sensitiveFields = config.sensitiveFields;
    this._serverSideApply = config.serverSideApply;
    this._validateSchema = config.validateSchema;
    this._wait = config.wait;
    this._waitForRollout = config.waitForRollout;
    this._yamlBody = config.yamlBody;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // apply_only - computed: false, optional: true, required: false
  private _applyOnly?: boolean | cdktf.IResolvable; 
  public get applyOnly() {
    return this.getBooleanAttribute('apply_only');
  }
  public set applyOnly(value: boolean | cdktf.IResolvable) {
    this._applyOnly = value;
  }
  public resetApplyOnly() {
    this._applyOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOnlyInput() {
    return this._applyOnly;
  }

  // force_conflicts - computed: false, optional: true, required: false
  private _forceConflicts?: boolean | cdktf.IResolvable; 
  public get forceConflicts() {
    return this.getBooleanAttribute('force_conflicts');
  }
  public set forceConflicts(value: boolean | cdktf.IResolvable) {
    this._forceConflicts = value;
  }
  public resetForceConflicts() {
    this._forceConflicts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceConflictsInput() {
    return this._forceConflicts;
  }

  // force_new - computed: false, optional: true, required: false
  private _forceNew?: boolean | cdktf.IResolvable; 
  public get forceNew() {
    return this.getBooleanAttribute('force_new');
  }
  public set forceNew(value: boolean | cdktf.IResolvable) {
    this._forceNew = value;
  }
  public resetForceNew() {
    this._forceNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNewInput() {
    return this._forceNew;
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

  // ignore_fields - computed: false, optional: true, required: false
  private _ignoreFields?: string[]; 
  public get ignoreFields() {
    return this.getListAttribute('ignore_fields');
  }
  public set ignoreFields(value: string[]) {
    this._ignoreFields = value;
  }
  public resetIgnoreFields() {
    this._ignoreFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFieldsInput() {
    return this._ignoreFields;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // live_manifest_incluster - computed: true, optional: false, required: false
  public get liveManifestIncluster() {
    return this.getStringAttribute('live_manifest_incluster');
  }

  // live_uid - computed: true, optional: false, required: false
  public get liveUid() {
    return this.getStringAttribute('live_uid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // override_namespace - computed: false, optional: true, required: false
  private _overrideNamespace?: string; 
  public get overrideNamespace() {
    return this.getStringAttribute('override_namespace');
  }
  public set overrideNamespace(value: string) {
    this._overrideNamespace = value;
  }
  public resetOverrideNamespace() {
    this._overrideNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideNamespaceInput() {
    return this._overrideNamespace;
  }

  // sensitive_fields - computed: false, optional: true, required: false
  private _sensitiveFields?: string[]; 
  public get sensitiveFields() {
    return this.getListAttribute('sensitive_fields');
  }
  public set sensitiveFields(value: string[]) {
    this._sensitiveFields = value;
  }
  public resetSensitiveFields() {
    this._sensitiveFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveFieldsInput() {
    return this._sensitiveFields;
  }

  // server_side_apply - computed: false, optional: true, required: false
  private _serverSideApply?: boolean | cdktf.IResolvable; 
  public get serverSideApply() {
    return this.getBooleanAttribute('server_side_apply');
  }
  public set serverSideApply(value: boolean | cdktf.IResolvable) {
    this._serverSideApply = value;
  }
  public resetServerSideApply() {
    this._serverSideApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideApplyInput() {
    return this._serverSideApply;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // validate_schema - computed: false, optional: true, required: false
  private _validateSchema?: boolean | cdktf.IResolvable; 
  public get validateSchema() {
    return this.getBooleanAttribute('validate_schema');
  }
  public set validateSchema(value: boolean | cdktf.IResolvable) {
    this._validateSchema = value;
  }
  public resetValidateSchema() {
    this._validateSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateSchemaInput() {
    return this._validateSchema;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout;
  }

  // yaml_body - computed: false, optional: false, required: true
  private _yamlBody?: string; 
  public get yamlBody() {
    return this.getStringAttribute('yaml_body');
  }
  public set yamlBody(value: string) {
    this._yamlBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlBodyInput() {
    return this._yamlBody;
  }

  // yaml_body_parsed - computed: true, optional: false, required: false
  public get yamlBodyParsed() {
    return this.getStringAttribute('yaml_body_parsed');
  }

  // yaml_incluster - computed: true, optional: false, required: false
  public get yamlIncluster() {
    return this.getStringAttribute('yaml_incluster');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManifestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManifestTimeouts) {
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
      apply_only: cdktf.booleanToTerraform(this._applyOnly),
      force_conflicts: cdktf.booleanToTerraform(this._forceConflicts),
      force_new: cdktf.booleanToTerraform(this._forceNew),
      id: cdktf.stringToTerraform(this._id),
      ignore_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreFields),
      override_namespace: cdktf.stringToTerraform(this._overrideNamespace),
      sensitive_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveFields),
      server_side_apply: cdktf.booleanToTerraform(this._serverSideApply),
      validate_schema: cdktf.booleanToTerraform(this._validateSchema),
      wait: cdktf.booleanToTerraform(this._wait),
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      yaml_body: cdktf.stringToTerraform(this._yamlBody),
      timeouts: manifestTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_only: {
        value: cdktf.booleanToHclTerraform(this._applyOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_conflicts: {
        value: cdktf.booleanToHclTerraform(this._forceConflicts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_new: {
        value: cdktf.booleanToHclTerraform(this._forceNew),
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
      ignore_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      override_namespace: {
        value: cdktf.stringToHclTerraform(this._overrideNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sensitiveFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_side_apply: {
        value: cdktf.booleanToHclTerraform(this._serverSideApply),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validate_schema: {
        value: cdktf.booleanToHclTerraform(this._validateSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait: {
        value: cdktf.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_rollout: {
        value: cdktf.booleanToHclTerraform(this._waitForRollout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      yaml_body: {
        value: cdktf.stringToHclTerraform(this._yamlBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: manifestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManifestTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
