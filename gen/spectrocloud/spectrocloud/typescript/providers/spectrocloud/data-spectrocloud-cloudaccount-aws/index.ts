// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/cloudaccount_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpectrocloudCloudaccountAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The context of the cluster. Allowed values are `project` or `tenant` or ``. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/cloudaccount_aws#context DataSpectrocloudCloudaccountAws#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/cloudaccount_aws#depends DataSpectrocloudCloudaccountAws#depends}
  */
  readonly depends?: string;
  /**
  * ID of the AWS cloud account registered in Palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/cloudaccount_aws#id DataSpectrocloudCloudaccountAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the AWS cloud account registered in Palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/cloudaccount_aws#name DataSpectrocloudCloudaccountAws#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/cloudaccount_aws spectrocloud_cloudaccount_aws}
*/
export class DataSpectrocloudCloudaccountAws extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cloudaccount_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpectrocloudCloudaccountAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpectrocloudCloudaccountAws to import
  * @param importFromId The id of the existing DataSpectrocloudCloudaccountAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/cloudaccount_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpectrocloudCloudaccountAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cloudaccount_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/data-sources/cloudaccount_aws spectrocloud_cloudaccount_aws} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpectrocloudCloudaccountAwsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSpectrocloudCloudaccountAwsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cloudaccount_aws',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.2',
        providerVersionConstraint: '0.26.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._context = config.context;
    this._depends = config.depends;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // depends - computed: true, optional: true, required: false
  private _depends?: string; 
  public get depends() {
    return this.getStringAttribute('depends');
  }
  public set depends(value: string) {
    this._depends = value;
  }
  public resetDepends() {
    this._depends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsInput() {
    return this._depends;
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

  // name - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.stringToTerraform(this._context),
      depends: cdktf.stringToTerraform(this._depends),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      depends: {
        value: cdktf.stringToHclTerraform(this._depends),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
