// https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KappConfig extends cdktf.TerraformMetaArguments {
  /**
  * App name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#app Kapp#app}
  */
  readonly app: string;
  /**
  * Internal (forces resource update when detected cluster drift)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#cluster_drift_detected Kapp#cluster_drift_detected}
  */
  readonly clusterDriftDetected?: boolean | cdktf.IResolvable;
  /**
  * Configuration as YAML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#config_yaml Kapp#config_yaml}
  */
  readonly configYaml?: string;
  /**
  * Enable debug logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#debug_logs Kapp#debug_logs}
  */
  readonly debugLogs?: boolean | cdktf.IResolvable;
  /**
  * Show changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#diff_changes Kapp#diff_changes}
  */
  readonly diffChanges?: boolean | cdktf.IResolvable;
  /**
  * Show number of lines around changed lines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#diff_context Kapp#diff_context}
  */
  readonly diffContext?: number;
  /**
  * Files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#files Kapp#files}
  */
  readonly files?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#id Kapp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Namespace name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#namespace Kapp#namespace}
  */
  readonly namespace: string;
  /**
  * delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#delete Kapp#delete}
  */
  readonly delete?: KappDelete;
  /**
  * deploy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#deploy Kapp#deploy}
  */
  readonly deploy?: KappDeploy;
}
export interface KappDelete {
  /**
  * Raw options given to kapp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#raw_options Kapp#raw_options}
  */
  readonly rawOptions?: string[];
}

export function kappDeleteToTerraform(struct?: KappDeleteOutputReference | KappDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rawOptions),
  }
}


export function kappDeleteToHclTerraform(struct?: KappDeleteOutputReference | KappDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rawOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KappDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KappDelete | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rawOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawOptions = this._rawOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KappDelete | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rawOptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rawOptions = value.rawOptions;
    }
  }

  // raw_options - computed: false, optional: true, required: false
  private _rawOptions?: string[]; 
  public get rawOptions() {
    return this.getListAttribute('raw_options');
  }
  public set rawOptions(value: string[]) {
    this._rawOptions = value;
  }
  public resetRawOptions() {
    this._rawOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawOptionsInput() {
    return this._rawOptions;
  }
}
export interface KappDeploy {
  /**
  * Raw options given to kapp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#raw_options Kapp#raw_options}
  */
  readonly rawOptions?: string[];
}

export function kappDeployToTerraform(struct?: KappDeployOutputReference | KappDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rawOptions),
  }
}


export function kappDeployToHclTerraform(struct?: KappDeployOutputReference | KappDeploy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rawOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KappDeployOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KappDeploy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rawOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawOptions = this._rawOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KappDeploy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rawOptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rawOptions = value.rawOptions;
    }
  }

  // raw_options - computed: false, optional: true, required: false
  private _rawOptions?: string[]; 
  public get rawOptions() {
    return this.getListAttribute('raw_options');
  }
  public set rawOptions(value: string[]) {
    this._rawOptions = value;
  }
  public resetRawOptions() {
    this._rawOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawOptionsInput() {
    return this._rawOptions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp carvel_kapp}
*/
export class Kapp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "carvel_kapp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Kapp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Kapp to import
  * @param importFromId The id of the existing Kapp that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Kapp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "carvel_kapp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kapp carvel_kapp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KappConfig
  */
  public constructor(scope: Construct, id: string, config: KappConfig) {
    super(scope, id, {
      terraformResourceType: 'carvel_kapp',
      terraformGeneratorMetadata: {
        providerName: 'carvel',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._app = config.app;
    this._clusterDriftDetected = config.clusterDriftDetected;
    this._configYaml = config.configYaml;
    this._debugLogs = config.debugLogs;
    this._diffChanges = config.diffChanges;
    this._diffContext = config.diffContext;
    this._files = config.files;
    this._id = config.id;
    this._namespace = config.namespace;
    this._delete.internalValue = config.delete;
    this._deploy.internalValue = config.deploy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // cluster_drift_detected - computed: false, optional: true, required: false
  private _clusterDriftDetected?: boolean | cdktf.IResolvable; 
  public get clusterDriftDetected() {
    return this.getBooleanAttribute('cluster_drift_detected');
  }
  public set clusterDriftDetected(value: boolean | cdktf.IResolvable) {
    this._clusterDriftDetected = value;
  }
  public resetClusterDriftDetected() {
    this._clusterDriftDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDriftDetectedInput() {
    return this._clusterDriftDetected;
  }

  // config_yaml - computed: false, optional: true, required: false
  private _configYaml?: string; 
  public get configYaml() {
    return this.getStringAttribute('config_yaml');
  }
  public set configYaml(value: string) {
    this._configYaml = value;
  }
  public resetConfigYaml() {
    this._configYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configYamlInput() {
    return this._configYaml;
  }

  // debug_logs - computed: false, optional: true, required: false
  private _debugLogs?: boolean | cdktf.IResolvable; 
  public get debugLogs() {
    return this.getBooleanAttribute('debug_logs');
  }
  public set debugLogs(value: boolean | cdktf.IResolvable) {
    this._debugLogs = value;
  }
  public resetDebugLogs() {
    this._debugLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLogsInput() {
    return this._debugLogs;
  }

  // diff_changes - computed: false, optional: true, required: false
  private _diffChanges?: boolean | cdktf.IResolvable; 
  public get diffChanges() {
    return this.getBooleanAttribute('diff_changes');
  }
  public set diffChanges(value: boolean | cdktf.IResolvable) {
    this._diffChanges = value;
  }
  public resetDiffChanges() {
    this._diffChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffChangesInput() {
    return this._diffChanges;
  }

  // diff_context - computed: false, optional: true, required: false
  private _diffContext?: number; 
  public get diffContext() {
    return this.getNumberAttribute('diff_context');
  }
  public set diffContext(value: number) {
    this._diffContext = value;
  }
  public resetDiffContext() {
    this._diffContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffContextInput() {
    return this._diffContext;
  }

  // files - computed: false, optional: true, required: false
  private _files?: string[]; 
  public get files() {
    return this.getListAttribute('files');
  }
  public set files(value: string[]) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
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

  // delete - computed: false, optional: true, required: false
  private _delete = new KappDeleteOutputReference(this, "delete");
  public get delete() {
    return this._delete;
  }
  public putDelete(value: KappDelete) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // deploy - computed: false, optional: true, required: false
  private _deploy = new KappDeployOutputReference(this, "deploy");
  public get deploy() {
    return this._deploy;
  }
  public putDeploy(value: KappDeploy) {
    this._deploy.internalValue = value;
  }
  public resetDeploy() {
    this._deploy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: cdktf.stringToTerraform(this._app),
      cluster_drift_detected: cdktf.booleanToTerraform(this._clusterDriftDetected),
      config_yaml: cdktf.stringToTerraform(this._configYaml),
      debug_logs: cdktf.booleanToTerraform(this._debugLogs),
      diff_changes: cdktf.booleanToTerraform(this._diffChanges),
      diff_context: cdktf.numberToTerraform(this._diffContext),
      files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._files),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      delete: kappDeleteToTerraform(this._delete.internalValue),
      deploy: kappDeployToTerraform(this._deploy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktf.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_drift_detected: {
        value: cdktf.booleanToHclTerraform(this._clusterDriftDetected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_yaml: {
        value: cdktf.stringToHclTerraform(this._configYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_logs: {
        value: cdktf.booleanToHclTerraform(this._debugLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      diff_changes: {
        value: cdktf.booleanToHclTerraform(this._diffChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      diff_context: {
        value: cdktf.numberToHclTerraform(this._diffContext),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._files),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      delete: {
        value: kappDeleteToHclTerraform(this._delete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KappDeleteList",
      },
      deploy: {
        value: kappDeployToHclTerraform(this._deploy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KappDeployList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
