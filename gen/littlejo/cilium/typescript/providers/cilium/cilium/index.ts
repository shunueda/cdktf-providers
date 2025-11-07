// https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiliumConfig extends cdktf.TerraformMetaArguments {
  /**
  * Datapath mode to use { tunnel | native | aws-eni | gke | azure | aks-byocni } (Default: `autodetected`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium#data_path Cilium#data_path}
  */
  readonly dataPath?: string;
  /**
  * Helm chart repository to download Cilium charts from (Default: `https://helm.cilium.io`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium#repository Cilium#repository}
  */
  readonly repository?: string;
  /**
  * When upgrading, reset the helm values to the ones built into the chart (Default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium#reset Cilium#reset}
  */
  readonly reset?: boolean | cdktf.IResolvable;
  /**
  * When upgrading, reuse the helm values from the latest release unless any overrides from are set from other flags. This option takes precedence over HelmResetValues (Default: `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium#reuse Cilium#reuse}
  */
  readonly reuse?: boolean | cdktf.IResolvable;
  /**
  * When upgrading, reset the values to the ones built into the chart, apply the last release's values and merge in any overrides from the command line via --set and -f. If '--reset-values' or '--reuse-values' is specified, this is ignored (Default: `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium#reusethenreuse Cilium#reusethenreuse}
  */
  readonly reusethenreuse?: boolean | cdktf.IResolvable;
  /**
  * Set helm values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2 (Default: `[]`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium#set Cilium#set}
  */
  readonly set?: string[];
  /**
  * values in raw yaml to pass to helm. (Default: `empty`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium#values Cilium#values}
  */
  readonly values?: string;
  /**
  * Version of Cilium (Default: `1.17.3`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium#version Cilium#version}
  */
  readonly version?: string;
  /**
  * Wait for Cilium status is ok (Default: `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium#wait Cilium#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
}
export interface CiliumCa {
}

export function ciliumCaToTerraform(struct?: CiliumCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ciliumCaToHclTerraform(struct?: CiliumCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CiliumCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CiliumCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiliumCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crt - computed: true, optional: false, required: false
  public get crt() {
    return this.getStringAttribute('crt');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium cilium}
*/
export class Cilium extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cilium";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cilium resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cilium to import
  * @param importFromId The id of the existing Cilium that should be imported. Refer to the {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cilium to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cilium", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/littlejo/cilium/0.3.2/docs/resources/cilium cilium} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiliumConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CiliumConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cilium',
      terraformGeneratorMetadata: {
        providerName: 'cilium',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataPath = config.dataPath;
    this._repository = config.repository;
    this._reset = config.reset;
    this._reuse = config.reuse;
    this._reusethenreuse = config.reusethenreuse;
    this._set = config.set;
    this._values = config.values;
    this._version = config.version;
    this._wait = config.wait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca - computed: true, optional: false, required: false
  private _ca = new CiliumCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }

  // data_path - computed: true, optional: true, required: false
  private _dataPath?: string; 
  public get dataPath() {
    return this.getStringAttribute('data_path');
  }
  public set dataPath(value: string) {
    this._dataPath = value;
  }
  public resetDataPath() {
    this._dataPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPathInput() {
    return this._dataPath;
  }

  // helm_values - computed: true, optional: false, required: false
  public get helmValues() {
    return this.getStringAttribute('helm_values');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repository - computed: true, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // reset - computed: true, optional: true, required: false
  private _reset?: boolean | cdktf.IResolvable; 
  public get reset() {
    return this.getBooleanAttribute('reset');
  }
  public set reset(value: boolean | cdktf.IResolvable) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // reuse - computed: true, optional: true, required: false
  private _reuse?: boolean | cdktf.IResolvable; 
  public get reuse() {
    return this.getBooleanAttribute('reuse');
  }
  public set reuse(value: boolean | cdktf.IResolvable) {
    this._reuse = value;
  }
  public resetReuse() {
    this._reuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseInput() {
    return this._reuse;
  }

  // reusethenreuse - computed: true, optional: true, required: false
  private _reusethenreuse?: boolean | cdktf.IResolvable; 
  public get reusethenreuse() {
    return this.getBooleanAttribute('reusethenreuse');
  }
  public set reusethenreuse(value: boolean | cdktf.IResolvable) {
    this._reusethenreuse = value;
  }
  public resetReusethenreuse() {
    this._reusethenreuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reusethenreuseInput() {
    return this._reusethenreuse;
  }

  // set - computed: true, optional: true, required: false
  private _set?: string[]; 
  public get set() {
    return this.getListAttribute('set');
  }
  public set set(value: string[]) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wait - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_path: cdktf.stringToTerraform(this._dataPath),
      repository: cdktf.stringToTerraform(this._repository),
      reset: cdktf.booleanToTerraform(this._reset),
      reuse: cdktf.booleanToTerraform(this._reuse),
      reusethenreuse: cdktf.booleanToTerraform(this._reusethenreuse),
      set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._set),
      values: cdktf.stringToTerraform(this._values),
      version: cdktf.stringToTerraform(this._version),
      wait: cdktf.booleanToTerraform(this._wait),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_path: {
        value: cdktf.stringToHclTerraform(this._dataPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset: {
        value: cdktf.booleanToHclTerraform(this._reset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reuse: {
        value: cdktf.booleanToHclTerraform(this._reuse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reusethenreuse: {
        value: cdktf.booleanToHclTerraform(this._reusethenreuse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._set),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      values: {
        value: cdktf.stringToHclTerraform(this._values),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait: {
        value: cdktf.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
