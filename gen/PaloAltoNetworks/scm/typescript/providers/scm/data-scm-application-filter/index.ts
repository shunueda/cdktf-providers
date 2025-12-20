// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/application_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmApplicationFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/application_filter#device DataScmApplicationFilter#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/application_filter#folder DataScmApplicationFilter#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/application_filter#id DataScmApplicationFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Alphanumeric string [ 0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/application_filter#name DataScmApplicationFilter#name}
  */
  readonly name?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/application_filter#snippet DataScmApplicationFilter#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmApplicationFilterTagging {
}

export function dataScmApplicationFilterTaggingToTerraform(struct?: DataScmApplicationFilterTagging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmApplicationFilterTaggingToHclTerraform(struct?: DataScmApplicationFilterTagging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmApplicationFilterTaggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmApplicationFilterTagging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmApplicationFilterTagging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // no_tag - computed: true, optional: false, required: false
  public get noTag() {
    return this.getBooleanAttribute('no_tag');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getListAttribute('tag');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/application_filter scm_application_filter}
*/
export class DataScmApplicationFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_application_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmApplicationFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmApplicationFilter to import
  * @param importFromId The id of the existing DataScmApplicationFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/application_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmApplicationFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_application_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/application_filter scm_application_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmApplicationFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmApplicationFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_application_filter',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._id = config.id;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getListAttribute('category');
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // evasive - computed: true, optional: false, required: false
  public get evasive() {
    return this.getBooleanAttribute('evasive');
  }

  // excessive_bandwidth_use - computed: true, optional: false, required: false
  public get excessiveBandwidthUse() {
    return this.getBooleanAttribute('excessive_bandwidth_use');
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return this.getListAttribute('exclude');
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // has_known_vulnerabilities - computed: true, optional: false, required: false
  public get hasKnownVulnerabilities() {
    return this.getBooleanAttribute('has_known_vulnerabilities');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_saas - computed: true, optional: false, required: false
  public get isSaas() {
    return this.getBooleanAttribute('is_saas');
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

  // new_appid - computed: true, optional: false, required: false
  public get newAppid() {
    return this.getBooleanAttribute('new_appid');
  }

  // pervasive - computed: true, optional: false, required: false
  public get pervasive() {
    return this.getBooleanAttribute('pervasive');
  }

  // prone_to_misuse - computed: true, optional: false, required: false
  public get proneToMisuse() {
    return this.getBooleanAttribute('prone_to_misuse');
  }

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getNumberListAttribute('risk');
  }

  // saas_certifications - computed: true, optional: false, required: false
  public get saasCertifications() {
    return this.getListAttribute('saas_certifications');
  }

  // saas_risk - computed: true, optional: false, required: false
  public get saasRisk() {
    return this.getListAttribute('saas_risk');
  }

  // snippet - computed: true, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // subcategory - computed: true, optional: false, required: false
  public get subcategory() {
    return this.getListAttribute('subcategory');
  }

  // tagging - computed: true, optional: false, required: false
  private _tagging = new DataScmApplicationFilterTaggingOutputReference(this, "tagging");
  public get tagging() {
    return this._tagging;
  }

  // technology - computed: true, optional: false, required: false
  public get technology() {
    return this.getListAttribute('technology');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // transfers_files - computed: true, optional: false, required: false
  public get transfersFiles() {
    return this.getBooleanAttribute('transfers_files');
  }

  // tunnels_other_apps - computed: true, optional: false, required: false
  public get tunnelsOtherApps() {
    return this.getBooleanAttribute('tunnels_other_apps');
  }

  // used_by_malware - computed: true, optional: false, required: false
  public get usedByMalware() {
    return this.getBooleanAttribute('used_by_malware');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
