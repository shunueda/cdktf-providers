// https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/runbook_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFirehydrantRunbookActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/runbook_action#integration_slug DataFirehydrantRunbookAction#integration_slug}
  */
  readonly integrationSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/runbook_action#slug DataFirehydrantRunbookAction#slug}
  */
  readonly slug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/runbook_action#type DataFirehydrantRunbookAction#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/runbook_action firehydrant_runbook_action}
*/
export class DataFirehydrantRunbookAction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_runbook_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFirehydrantRunbookAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFirehydrantRunbookAction to import
  * @param importFromId The id of the existing DataFirehydrantRunbookAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/runbook_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFirehydrantRunbookAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_runbook_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.12/docs/data-sources/runbook_action firehydrant_runbook_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFirehydrantRunbookActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataFirehydrantRunbookActionConfig) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_runbook_action',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.14.12',
        providerVersionConstraint: '0.14.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._integrationSlug = config.integrationSlug;
    this._slug = config.slug;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_slug - computed: false, optional: false, required: true
  private _integrationSlug?: string; 
  public get integrationSlug() {
    return this.getStringAttribute('integration_slug');
  }
  public set integrationSlug(value: string) {
    this._integrationSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationSlugInput() {
    return this._integrationSlug;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      integration_slug: cdktf.stringToTerraform(this._integrationSlug),
      slug: cdktf.stringToTerraform(this._slug),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      integration_slug: {
        value: cdktf.stringToHclTerraform(this._integrationSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
