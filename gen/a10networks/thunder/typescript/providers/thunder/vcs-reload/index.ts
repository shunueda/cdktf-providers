// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsReloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * apply the configuration change on the aVCS cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload#cluster_discovery VcsReload#cluster_discovery}
  */
  readonly clusterDiscovery?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload#complete VcsReload#complete}
  */
  readonly complete?: number;
  /**
  * keep database safe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload#db_safe VcsReload#db_safe}
  */
  readonly dbSafe?: number;
  /**
  * Reload a specific device when VCS is enabled (device id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload#device VcsReload#device}
  */
  readonly device?: number;
  /**
  * don't merge this vBlade's configuration to aVCS chassis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload#disable_merge VcsReload#disable_merge}
  */
  readonly disableMerge?: number;
  /**
  * force to complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload#force VcsReload#force}
  */
  readonly force?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload#id VcsReload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload#start VcsReload#start}
  */
  readonly start?: number;
  /**
  * automatically complete the db-safe mode when timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload#timeout VcsReload#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload thunder_vcs_reload}
*/
export class VcsReload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_reload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcsReload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcsReload to import
  * @param importFromId The id of the existing VcsReload that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcsReload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_reload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_reload thunder_vcs_reload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsReloadConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VcsReloadConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_reload',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterDiscovery = config.clusterDiscovery;
    this._complete = config.complete;
    this._dbSafe = config.dbSafe;
    this._device = config.device;
    this._disableMerge = config.disableMerge;
    this._force = config.force;
    this._id = config.id;
    this._start = config.start;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_discovery - computed: false, optional: true, required: false
  private _clusterDiscovery?: number; 
  public get clusterDiscovery() {
    return this.getNumberAttribute('cluster_discovery');
  }
  public set clusterDiscovery(value: number) {
    this._clusterDiscovery = value;
  }
  public resetClusterDiscovery() {
    this._clusterDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDiscoveryInput() {
    return this._clusterDiscovery;
  }

  // complete - computed: false, optional: true, required: false
  private _complete?: number; 
  public get complete() {
    return this.getNumberAttribute('complete');
  }
  public set complete(value: number) {
    this._complete = value;
  }
  public resetComplete() {
    this._complete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeInput() {
    return this._complete;
  }

  // db_safe - computed: false, optional: true, required: false
  private _dbSafe?: number; 
  public get dbSafe() {
    return this.getNumberAttribute('db_safe');
  }
  public set dbSafe(value: number) {
    this._dbSafe = value;
  }
  public resetDbSafe() {
    this._dbSafe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSafeInput() {
    return this._dbSafe;
  }

  // device - computed: false, optional: true, required: false
  private _device?: number; 
  public get device() {
    return this.getNumberAttribute('device');
  }
  public set device(value: number) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // disable_merge - computed: false, optional: true, required: false
  private _disableMerge?: number; 
  public get disableMerge() {
    return this.getNumberAttribute('disable_merge');
  }
  public set disableMerge(value: number) {
    this._disableMerge = value;
  }
  public resetDisableMerge() {
    this._disableMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMergeInput() {
    return this._disableMerge;
  }

  // force - computed: false, optional: true, required: false
  private _force?: number; 
  public get force() {
    return this.getNumberAttribute('force');
  }
  public set force(value: number) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_discovery: cdktf.numberToTerraform(this._clusterDiscovery),
      complete: cdktf.numberToTerraform(this._complete),
      db_safe: cdktf.numberToTerraform(this._dbSafe),
      device: cdktf.numberToTerraform(this._device),
      disable_merge: cdktf.numberToTerraform(this._disableMerge),
      force: cdktf.numberToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      start: cdktf.numberToTerraform(this._start),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_discovery: {
        value: cdktf.numberToHclTerraform(this._clusterDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      complete: {
        value: cdktf.numberToHclTerraform(this._complete),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_safe: {
        value: cdktf.numberToHclTerraform(this._dbSafe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device: {
        value: cdktf.numberToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_merge: {
        value: cdktf.numberToHclTerraform(this._disableMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force: {
        value: cdktf.numberToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start: {
        value: cdktf.numberToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
