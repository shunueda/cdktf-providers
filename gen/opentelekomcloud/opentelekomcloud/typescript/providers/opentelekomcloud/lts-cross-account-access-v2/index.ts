// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtsCrossAccountAccessV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#agency_domain_name LtsCrossAccountAccessV2#agency_domain_name}
  */
  readonly agencyDomainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#agency_name LtsCrossAccountAccessV2#agency_name}
  */
  readonly agencyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#agency_project_id LtsCrossAccountAccessV2#agency_project_id}
  */
  readonly agencyProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#id LtsCrossAccountAccessV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#log_agency_group_id LtsCrossAccountAccessV2#log_agency_group_id}
  */
  readonly logAgencyGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#log_agency_group_name LtsCrossAccountAccessV2#log_agency_group_name}
  */
  readonly logAgencyGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#log_agency_stream_id LtsCrossAccountAccessV2#log_agency_stream_id}
  */
  readonly logAgencyStreamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#log_agency_stream_name LtsCrossAccountAccessV2#log_agency_stream_name}
  */
  readonly logAgencyStreamName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#log_group_id LtsCrossAccountAccessV2#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#log_group_name LtsCrossAccountAccessV2#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#log_stream_id LtsCrossAccountAccessV2#log_stream_id}
  */
  readonly logStreamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#log_stream_name LtsCrossAccountAccessV2#log_stream_name}
  */
  readonly logStreamName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#name LtsCrossAccountAccessV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#tags LtsCrossAccountAccessV2#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2 opentelekomcloud_lts_cross_account_access_v2}
*/
export class LtsCrossAccountAccessV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lts_cross_account_access_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtsCrossAccountAccessV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtsCrossAccountAccessV2 to import
  * @param importFromId The id of the existing LtsCrossAccountAccessV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtsCrossAccountAccessV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_lts_cross_account_access_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/resources/lts_cross_account_access_v2 opentelekomcloud_lts_cross_account_access_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtsCrossAccountAccessV2Config
  */
  public constructor(scope: Construct, id: string, config: LtsCrossAccountAccessV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lts_cross_account_access_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.53',
        providerVersionConstraint: '1.36.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agencyDomainName = config.agencyDomainName;
    this._agencyName = config.agencyName;
    this._agencyProjectId = config.agencyProjectId;
    this._id = config.id;
    this._logAgencyGroupId = config.logAgencyGroupId;
    this._logAgencyGroupName = config.logAgencyGroupName;
    this._logAgencyStreamId = config.logAgencyStreamId;
    this._logAgencyStreamName = config.logAgencyStreamName;
    this._logGroupId = config.logGroupId;
    this._logGroupName = config.logGroupName;
    this._logStreamId = config.logStreamId;
    this._logStreamName = config.logStreamName;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_config_type - computed: true, optional: false, required: false
  public get accessConfigType() {
    return this.getStringAttribute('access_config_type');
  }

  // agency_domain_name - computed: false, optional: false, required: true
  private _agencyDomainName?: string; 
  public get agencyDomainName() {
    return this.getStringAttribute('agency_domain_name');
  }
  public set agencyDomainName(value: string) {
    this._agencyDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agencyDomainNameInput() {
    return this._agencyDomainName;
  }

  // agency_name - computed: false, optional: false, required: true
  private _agencyName?: string; 
  public get agencyName() {
    return this.getStringAttribute('agency_name');
  }
  public set agencyName(value: string) {
    this._agencyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agencyNameInput() {
    return this._agencyName;
  }

  // agency_project_id - computed: false, optional: false, required: true
  private _agencyProjectId?: string; 
  public get agencyProjectId() {
    return this.getStringAttribute('agency_project_id');
  }
  public set agencyProjectId(value: string) {
    this._agencyProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agencyProjectIdInput() {
    return this._agencyProjectId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // log_agency_group_id - computed: false, optional: false, required: true
  private _logAgencyGroupId?: string; 
  public get logAgencyGroupId() {
    return this.getStringAttribute('log_agency_group_id');
  }
  public set logAgencyGroupId(value: string) {
    this._logAgencyGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgencyGroupIdInput() {
    return this._logAgencyGroupId;
  }

  // log_agency_group_name - computed: false, optional: false, required: true
  private _logAgencyGroupName?: string; 
  public get logAgencyGroupName() {
    return this.getStringAttribute('log_agency_group_name');
  }
  public set logAgencyGroupName(value: string) {
    this._logAgencyGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgencyGroupNameInput() {
    return this._logAgencyGroupName;
  }

  // log_agency_stream_id - computed: false, optional: false, required: true
  private _logAgencyStreamId?: string; 
  public get logAgencyStreamId() {
    return this.getStringAttribute('log_agency_stream_id');
  }
  public set logAgencyStreamId(value: string) {
    this._logAgencyStreamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgencyStreamIdInput() {
    return this._logAgencyStreamId;
  }

  // log_agency_stream_name - computed: false, optional: false, required: true
  private _logAgencyStreamName?: string; 
  public get logAgencyStreamName() {
    return this.getStringAttribute('log_agency_stream_name');
  }
  public set logAgencyStreamName(value: string) {
    this._logAgencyStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAgencyStreamNameInput() {
    return this._logAgencyStreamName;
  }

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_id - computed: false, optional: false, required: true
  private _logStreamId?: string; 
  public get logStreamId() {
    return this.getStringAttribute('log_stream_id');
  }
  public set logStreamId(value: string) {
    this._logStreamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamIdInput() {
    return this._logStreamId;
  }

  // log_stream_name - computed: false, optional: false, required: true
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agency_domain_name: cdktf.stringToTerraform(this._agencyDomainName),
      agency_name: cdktf.stringToTerraform(this._agencyName),
      agency_project_id: cdktf.stringToTerraform(this._agencyProjectId),
      id: cdktf.stringToTerraform(this._id),
      log_agency_group_id: cdktf.stringToTerraform(this._logAgencyGroupId),
      log_agency_group_name: cdktf.stringToTerraform(this._logAgencyGroupName),
      log_agency_stream_id: cdktf.stringToTerraform(this._logAgencyStreamId),
      log_agency_stream_name: cdktf.stringToTerraform(this._logAgencyStreamName),
      log_group_id: cdktf.stringToTerraform(this._logGroupId),
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      log_stream_id: cdktf.stringToTerraform(this._logStreamId),
      log_stream_name: cdktf.stringToTerraform(this._logStreamName),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agency_domain_name: {
        value: cdktf.stringToHclTerraform(this._agencyDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agency_name: {
        value: cdktf.stringToHclTerraform(this._agencyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agency_project_id: {
        value: cdktf.stringToHclTerraform(this._agencyProjectId),
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
      log_agency_group_id: {
        value: cdktf.stringToHclTerraform(this._logAgencyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agency_group_name: {
        value: cdktf.stringToHclTerraform(this._logAgencyGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agency_stream_id: {
        value: cdktf.stringToHclTerraform(this._logAgencyStreamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_agency_stream_name: {
        value: cdktf.stringToHclTerraform(this._logAgencyStreamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_group_id: {
        value: cdktf.stringToHclTerraform(this._logGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_group_name: {
        value: cdktf.stringToHclTerraform(this._logGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_id: {
        value: cdktf.stringToHclTerraform(this._logStreamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_name: {
        value: cdktf.stringToHclTerraform(this._logStreamName),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
