// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteversionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#datetime Siteversion#datetime}
  */
  readonly datetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#id Siteversion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#name Siteversion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#prev_target_version Siteversion#prev_target_version}
  */
  readonly prevTargetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#replication_state Siteversion#replication_state}
  */
  readonly replicationState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#site_id Siteversion#site_id}
  */
  readonly siteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#target_timeline Siteversion#target_timeline}
  */
  readonly targetTimeline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#target_version Siteversion#target_version}
  */
  readonly targetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#tenant_ref Siteversion#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#timeline Siteversion#timeline}
  */
  readonly timeline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#uuid Siteversion#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#version Siteversion#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#version_type Siteversion#version_type}
  */
  readonly versionType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion avi_siteversion}
*/
export class Siteversion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_siteversion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Siteversion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Siteversion to import
  * @param importFromId The id of the existing Siteversion that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Siteversion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_siteversion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/siteversion avi_siteversion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteversionConfig
  */
  public constructor(scope: Construct, id: string, config: SiteversionConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_siteversion',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datetime = config.datetime;
    this._id = config.id;
    this._name = config.name;
    this._prevTargetVersion = config.prevTargetVersion;
    this._replicationState = config.replicationState;
    this._siteId = config.siteId;
    this._targetTimeline = config.targetTimeline;
    this._targetVersion = config.targetVersion;
    this._tenantRef = config.tenantRef;
    this._timeline = config.timeline;
    this._uuid = config.uuid;
    this._version = config.version;
    this._versionType = config.versionType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datetime - computed: true, optional: true, required: false
  private _datetime?: string; 
  public get datetime() {
    return this.getStringAttribute('datetime');
  }
  public set datetime(value: string) {
    this._datetime = value;
  }
  public resetDatetime() {
    this._datetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeInput() {
    return this._datetime;
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

  // prev_target_version - computed: true, optional: true, required: false
  private _prevTargetVersion?: string; 
  public get prevTargetVersion() {
    return this.getStringAttribute('prev_target_version');
  }
  public set prevTargetVersion(value: string) {
    this._prevTargetVersion = value;
  }
  public resetPrevTargetVersion() {
    this._prevTargetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prevTargetVersionInput() {
    return this._prevTargetVersion;
  }

  // replication_state - computed: true, optional: true, required: false
  private _replicationState?: string; 
  public get replicationState() {
    return this.getStringAttribute('replication_state');
  }
  public set replicationState(value: string) {
    this._replicationState = value;
  }
  public resetReplicationState() {
    this._replicationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationStateInput() {
    return this._replicationState;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // target_timeline - computed: true, optional: true, required: false
  private _targetTimeline?: string; 
  public get targetTimeline() {
    return this.getStringAttribute('target_timeline');
  }
  public set targetTimeline(value: string) {
    this._targetTimeline = value;
  }
  public resetTargetTimeline() {
    this._targetTimeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTimelineInput() {
    return this._targetTimeline;
  }

  // target_version - computed: true, optional: true, required: false
  private _targetVersion?: string; 
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string) {
    this._targetVersion = value;
  }
  public resetTargetVersion() {
    this._targetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // timeline - computed: true, optional: true, required: false
  private _timeline?: string; 
  public get timeline() {
    return this.getStringAttribute('timeline');
  }
  public set timeline(value: string) {
    this._timeline = value;
  }
  public resetTimeline() {
    this._timeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timelineInput() {
    return this._timeline;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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

  // version_type - computed: true, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datetime: cdktf.stringToTerraform(this._datetime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      prev_target_version: cdktf.stringToTerraform(this._prevTargetVersion),
      replication_state: cdktf.stringToTerraform(this._replicationState),
      site_id: cdktf.stringToTerraform(this._siteId),
      target_timeline: cdktf.stringToTerraform(this._targetTimeline),
      target_version: cdktf.stringToTerraform(this._targetVersion),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      timeline: cdktf.stringToTerraform(this._timeline),
      uuid: cdktf.stringToTerraform(this._uuid),
      version: cdktf.stringToTerraform(this._version),
      version_type: cdktf.stringToTerraform(this._versionType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datetime: {
        value: cdktf.stringToHclTerraform(this._datetime),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prev_target_version: {
        value: cdktf.stringToHclTerraform(this._prevTargetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_state: {
        value: cdktf.stringToHclTerraform(this._replicationState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_timeline: {
        value: cdktf.stringToHclTerraform(this._targetTimeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_version: {
        value: cdktf.stringToHclTerraform(this._targetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeline: {
        value: cdktf.stringToHclTerraform(this._timeline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
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
      version_type: {
        value: cdktf.stringToHclTerraform(this._versionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
