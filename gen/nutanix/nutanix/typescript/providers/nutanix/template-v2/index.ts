// generated from terraform resource schema

import { TemplateV2LinksList, 
TemplateV2CreatedBy, 
templateV2CreatedByToTerraform, 
templateV2CreatedByToHclTerraform, 
TemplateV2CreatedByList, 
TemplateV2GuestUpdateStatus, 
templateV2GuestUpdateStatusToTerraform, 
templateV2GuestUpdateStatusToHclTerraform, 
TemplateV2GuestUpdateStatusList, 
TemplateV2TemplateVersionSpec, 
templateV2TemplateVersionSpecToTerraform, 
templateV2TemplateVersionSpecToHclTerraform, 
TemplateV2TemplateVersionSpecOutputReference, 
TemplateV2UpdatedBy, 
templateV2UpdatedByToTerraform, 
templateV2UpdatedByToHclTerraform, 
TemplateV2UpdatedByList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TemplateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#category_ext_ids TemplateV2#category_ext_ids}
  */
  readonly categoryExtIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#id TemplateV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#template_description TemplateV2#template_description}
  */
  readonly templateDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#template_name TemplateV2#template_name}
  */
  readonly templateName: string;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#created_by TemplateV2#created_by}
  */
  readonly createdBy?: TemplateV2CreatedBy[] | cdktf.IResolvable;
  /**
  * guest_update_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#guest_update_status TemplateV2#guest_update_status}
  */
  readonly guestUpdateStatus?: TemplateV2GuestUpdateStatus[] | cdktf.IResolvable;
  /**
  * template_version_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#template_version_spec TemplateV2#template_version_spec}
  */
  readonly templateVersionSpec: TemplateV2TemplateVersionSpec;
  /**
  * updated_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#updated_by TemplateV2#updated_by}
  */
  readonly updatedBy?: TemplateV2UpdatedBy[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2 nutanix_template_v2}
*/
export class TemplateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_template_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateV2 to import
  * @param importFromId The id of the existing TemplateV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_template_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/template_v2 nutanix_template_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateV2Config
  */
  public constructor(scope: Construct, id: string, config: TemplateV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_template_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categoryExtIds = config.categoryExtIds;
    this._id = config.id;
    this._templateDescription = config.templateDescription;
    this._templateName = config.templateName;
    this._createdBy.internalValue = config.createdBy;
    this._guestUpdateStatus.internalValue = config.guestUpdateStatus;
    this._templateVersionSpec.internalValue = config.templateVersionSpec;
    this._updatedBy.internalValue = config.updatedBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category_ext_ids - computed: true, optional: true, required: false
  private _categoryExtIds?: string[]; 
  public get categoryExtIds() {
    return this.getListAttribute('category_ext_ids');
  }
  public set categoryExtIds(value: string[]) {
    this._categoryExtIds = value;
  }
  public resetCategoryExtIds() {
    this._categoryExtIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryExtIdsInput() {
    return this._categoryExtIds;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
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

  // links - computed: true, optional: false, required: false
  private _links = new TemplateV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // template_description - computed: true, optional: true, required: false
  private _templateDescription?: string; 
  public get templateDescription() {
    return this.getStringAttribute('template_description');
  }
  public set templateDescription(value: string) {
    this._templateDescription = value;
  }
  public resetTemplateDescription() {
    this._templateDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDescriptionInput() {
    return this._templateDescription;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy = new TemplateV2CreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: TemplateV2CreatedBy[] | cdktf.IResolvable) {
    this._createdBy.internalValue = value;
  }
  public resetCreatedBy() {
    this._createdBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy.internalValue;
  }

  // guest_update_status - computed: false, optional: true, required: false
  private _guestUpdateStatus = new TemplateV2GuestUpdateStatusList(this, "guest_update_status", false);
  public get guestUpdateStatus() {
    return this._guestUpdateStatus;
  }
  public putGuestUpdateStatus(value: TemplateV2GuestUpdateStatus[] | cdktf.IResolvable) {
    this._guestUpdateStatus.internalValue = value;
  }
  public resetGuestUpdateStatus() {
    this._guestUpdateStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestUpdateStatusInput() {
    return this._guestUpdateStatus.internalValue;
  }

  // template_version_spec - computed: false, optional: false, required: true
  private _templateVersionSpec = new TemplateV2TemplateVersionSpecOutputReference(this, "template_version_spec");
  public get templateVersionSpec() {
    return this._templateVersionSpec;
  }
  public putTemplateVersionSpec(value: TemplateV2TemplateVersionSpec) {
    this._templateVersionSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVersionSpecInput() {
    return this._templateVersionSpec.internalValue;
  }

  // updated_by - computed: false, optional: true, required: false
  private _updatedBy = new TemplateV2UpdatedByList(this, "updated_by", false);
  public get updatedBy() {
    return this._updatedBy;
  }
  public putUpdatedBy(value: TemplateV2UpdatedBy[] | cdktf.IResolvable) {
    this._updatedBy.internalValue = value;
  }
  public resetUpdatedBy() {
    this._updatedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category_ext_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categoryExtIds),
      id: cdktf.stringToTerraform(this._id),
      template_description: cdktf.stringToTerraform(this._templateDescription),
      template_name: cdktf.stringToTerraform(this._templateName),
      created_by: cdktf.listMapper(templateV2CreatedByToTerraform, true)(this._createdBy.internalValue),
      guest_update_status: cdktf.listMapper(templateV2GuestUpdateStatusToTerraform, true)(this._guestUpdateStatus.internalValue),
      template_version_spec: templateV2TemplateVersionSpecToTerraform(this._templateVersionSpec.internalValue),
      updated_by: cdktf.listMapper(templateV2UpdatedByToTerraform, true)(this._updatedBy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category_ext_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._categoryExtIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_description: {
        value: cdktf.stringToHclTerraform(this._templateDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.listMapperHcl(templateV2CreatedByToHclTerraform, true)(this._createdBy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateV2CreatedByList",
      },
      guest_update_status: {
        value: cdktf.listMapperHcl(templateV2GuestUpdateStatusToHclTerraform, true)(this._guestUpdateStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateV2GuestUpdateStatusList",
      },
      template_version_spec: {
        value: templateV2TemplateVersionSpecToHclTerraform(this._templateVersionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateV2TemplateVersionSpecList",
      },
      updated_by: {
        value: cdktf.listMapperHcl(templateV2UpdatedByToHclTerraform, true)(this._updatedBy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateV2UpdatedByList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
