// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/rdc_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdcOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/rdc_organization#desired_member_count RdcOrganization#desired_member_count}
  */
  readonly desiredMemberCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/rdc_organization#id RdcOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/rdc_organization#organization_name RdcOrganization#organization_name}
  */
  readonly organizationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/rdc_organization#real_pk RdcOrganization#real_pk}
  */
  readonly realPk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/rdc_organization#source RdcOrganization#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/rdc_organization alicloud_rdc_organization}
*/
export class RdcOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rdc_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdcOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdcOrganization to import
  * @param importFromId The id of the existing RdcOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/rdc_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdcOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rdc_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/rdc_organization alicloud_rdc_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdcOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: RdcOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rdc_organization',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._desiredMemberCount = config.desiredMemberCount;
    this._id = config.id;
    this._organizationName = config.organizationName;
    this._realPk = config.realPk;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // desired_member_count - computed: false, optional: true, required: false
  private _desiredMemberCount?: number; 
  public get desiredMemberCount() {
    return this.getNumberAttribute('desired_member_count');
  }
  public set desiredMemberCount(value: number) {
    this._desiredMemberCount = value;
  }
  public resetDesiredMemberCount() {
    this._desiredMemberCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredMemberCountInput() {
    return this._desiredMemberCount;
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

  // organization_name - computed: false, optional: false, required: true
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // real_pk - computed: false, optional: true, required: false
  private _realPk?: string; 
  public get realPk() {
    return this.getStringAttribute('real_pk');
  }
  public set realPk(value: string) {
    this._realPk = value;
  }
  public resetRealPk() {
    this._realPk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPkInput() {
    return this._realPk;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      desired_member_count: cdktf.numberToTerraform(this._desiredMemberCount),
      id: cdktf.stringToTerraform(this._id),
      organization_name: cdktf.stringToTerraform(this._organizationName),
      real_pk: cdktf.stringToTerraform(this._realPk),
      source: cdktf.stringToTerraform(this._source),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desired_member_count: {
        value: cdktf.numberToHclTerraform(this._desiredMemberCount),
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
      organization_name: {
        value: cdktf.stringToHclTerraform(this._organizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      real_pk: {
        value: cdktf.stringToHclTerraform(this._realPk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
