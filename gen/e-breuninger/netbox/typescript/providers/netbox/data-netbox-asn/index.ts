// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/asn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetboxAsnConfig extends cdktf.TerraformMetaArguments {
  /**
  * At least one of `asn` or `tag` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/asn#asn DataNetboxAsn#asn}
  */
  readonly asn?: string;
  /**
  * Tag to include in the data source filter (must match the tag's slug). At least one of `asn` or `tag` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/asn#tag DataNetboxAsn#tag}
  */
  readonly tag?: string;
  /**
  * Tag to exclude from the data source filter (must match the tag's slug).
  * Refer to [Netbox's documentation](https://demo.netbox.dev/static/docs/rest-api/filtering/#lookup-expressions)
  * for more information on available lookup expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/asn#tag__n DataNetboxAsn#tag__n}
  */
  readonly tagN?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/asn netbox_asn}
*/
export class DataNetboxAsn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_asn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetboxAsn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetboxAsn to import
  * @param importFromId The id of the existing DataNetboxAsn that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/asn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetboxAsn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_asn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/asn netbox_asn} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetboxAsnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetboxAsnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netbox_asn',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asn = config.asn;
    this._tag = config.tag;
    this._tagN = config.tagN;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: false, optional: true, required: false
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag__n - computed: false, optional: true, required: false
  private _tagN?: string; 
  public get tagN() {
    return this.getStringAttribute('tag__n');
  }
  public set tagN(value: string) {
    this._tagN = value;
  }
  public resetTagN() {
    this._tagN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNInput() {
    return this._tagN;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.stringToTerraform(this._asn),
      tag: cdktf.stringToTerraform(this._tag),
      tag__n: cdktf.stringToTerraform(this._tagN),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag__n: {
        value: cdktf.stringToHclTerraform(this._tagN),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
