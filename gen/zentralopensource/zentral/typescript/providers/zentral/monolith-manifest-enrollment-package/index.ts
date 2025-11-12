// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_enrollment_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonolithManifestEnrollmentPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enrollment package builder module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_enrollment_package#builder MonolithManifestEnrollmentPackage#builder}
  */
  readonly builder: string;
  /**
  * ID of the enrollment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_enrollment_package#enrollment_id MonolithManifestEnrollmentPackage#enrollment_id}
  */
  readonly enrollmentId: number;
  /**
  * ID of the manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_enrollment_package#manifest_id MonolithManifestEnrollmentPackage#manifest_id}
  */
  readonly manifestId: number;
  /**
  * The `ID`s of the tags used to scope the enrollment package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_enrollment_package#tag_ids MonolithManifestEnrollmentPackage#tag_ids}
  */
  readonly tagIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_enrollment_package zentral_monolith_manifest_enrollment_package}
*/
export class MonolithManifestEnrollmentPackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_monolith_manifest_enrollment_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonolithManifestEnrollmentPackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonolithManifestEnrollmentPackage to import
  * @param importFromId The id of the existing MonolithManifestEnrollmentPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_enrollment_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonolithManifestEnrollmentPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_monolith_manifest_enrollment_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_enrollment_package zentral_monolith_manifest_enrollment_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonolithManifestEnrollmentPackageConfig
  */
  public constructor(scope: Construct, id: string, config: MonolithManifestEnrollmentPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_monolith_manifest_enrollment_package',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64',
        providerVersionConstraint: '0.1.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._builder = config.builder;
    this._enrollmentId = config.enrollmentId;
    this._manifestId = config.manifestId;
    this._tagIds = config.tagIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // builder - computed: false, optional: false, required: true
  private _builder?: string; 
  public get builder() {
    return this.getStringAttribute('builder');
  }
  public set builder(value: string) {
    this._builder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get builderInput() {
    return this._builder;
  }

  // enrollment_id - computed: false, optional: false, required: true
  private _enrollmentId?: number; 
  public get enrollmentId() {
    return this.getNumberAttribute('enrollment_id');
  }
  public set enrollmentId(value: number) {
    this._enrollmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentIdInput() {
    return this._enrollmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // manifest_id - computed: false, optional: false, required: true
  private _manifestId?: number; 
  public get manifestId() {
    return this.getNumberAttribute('manifest_id');
  }
  public set manifestId(value: number) {
    this._manifestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestIdInput() {
    return this._manifestId;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: number[]; 
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      builder: cdktf.stringToTerraform(this._builder),
      enrollment_id: cdktf.numberToTerraform(this._enrollmentId),
      manifest_id: cdktf.numberToTerraform(this._manifestId),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      builder: {
        value: cdktf.stringToHclTerraform(this._builder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enrollment_id: {
        value: cdktf.numberToHclTerraform(this._enrollmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      manifest_id: {
        value: cdktf.numberToHclTerraform(this._manifestId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
