// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/pra_portal_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaPraPortalControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The external domain name prefix of the Browser Access application that is used for Zscaler-managed certificates when creating a privileged portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/pra_portal_controller#ext_domain DataZpaPraPortalController#ext_domain}
  */
  readonly extDomain?: string;
  /**
  * The domain suffix for the privileged portal URL. This field must be one of the customer's authentication domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/pra_portal_controller#ext_domain_name DataZpaPraPortalController#ext_domain_name}
  */
  readonly extDomainName?: string;
  /**
  * The translation of the external domain name prefix of the Browser Access application that is used for Zscaler-managed certificates when creating a privileged portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/pra_portal_controller#ext_domain_translation DataZpaPraPortalController#ext_domain_translation}
  */
  readonly extDomainTranslation?: string;
  /**
  * The domain prefix for the privileged portal URL. The supported string can include numbers, lower case characters, and only supports a hyphen (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/pra_portal_controller#ext_label DataZpaPraPortalController#ext_label}
  */
  readonly extLabel?: string;
  /**
  * The unique identifier of the privileged portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/pra_portal_controller#id DataZpaPraPortalController#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the privileged portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/pra_portal_controller#name DataZpaPraPortalController#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/pra_portal_controller zpa_pra_portal_controller}
*/
export class DataZpaPraPortalController extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_pra_portal_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaPraPortalController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaPraPortalController to import
  * @param importFromId The id of the existing DataZpaPraPortalController that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/pra_portal_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaPraPortalController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_pra_portal_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/pra_portal_controller zpa_pra_portal_controller} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaPraPortalControllerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaPraPortalControllerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_pra_portal_controller',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extDomain = config.extDomain;
    this._extDomainName = config.extDomainName;
    this._extDomainTranslation = config.extDomainTranslation;
    this._extLabel = config.extLabel;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ext_domain - computed: false, optional: true, required: false
  private _extDomain?: string; 
  public get extDomain() {
    return this.getStringAttribute('ext_domain');
  }
  public set extDomain(value: string) {
    this._extDomain = value;
  }
  public resetExtDomain() {
    this._extDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extDomainInput() {
    return this._extDomain;
  }

  // ext_domain_name - computed: false, optional: true, required: false
  private _extDomainName?: string; 
  public get extDomainName() {
    return this.getStringAttribute('ext_domain_name');
  }
  public set extDomainName(value: string) {
    this._extDomainName = value;
  }
  public resetExtDomainName() {
    this._extDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extDomainNameInput() {
    return this._extDomainName;
  }

  // ext_domain_translation - computed: false, optional: true, required: false
  private _extDomainTranslation?: string; 
  public get extDomainTranslation() {
    return this.getStringAttribute('ext_domain_translation');
  }
  public set extDomainTranslation(value: string) {
    this._extDomainTranslation = value;
  }
  public resetExtDomainTranslation() {
    this._extDomainTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extDomainTranslationInput() {
    return this._extDomainTranslation;
  }

  // ext_label - computed: false, optional: true, required: false
  private _extLabel?: string; 
  public get extLabel() {
    return this.getStringAttribute('ext_label');
  }
  public set extLabel(value: string) {
    this._extLabel = value;
  }
  public resetExtLabel() {
    this._extLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extLabelInput() {
    return this._extLabel;
  }

  // getc_name - computed: true, optional: false, required: false
  public get fetchcName() {
    return this.getStringAttribute('getc_name');
  }

  // id - computed: false, optional: true, required: false
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

  // microtenant_id - computed: true, optional: false, required: false
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }

  // microtenant_name - computed: true, optional: false, required: false
  public get microtenantName() {
    return this.getStringAttribute('microtenant_name');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // name - computed: false, optional: true, required: false
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

  // user_notification - computed: true, optional: false, required: false
  public get userNotification() {
    return this.getStringAttribute('user_notification');
  }

  // user_notification_enabled - computed: true, optional: false, required: false
  public get userNotificationEnabled() {
    return this.getBooleanAttribute('user_notification_enabled');
  }

  // user_portal_gid - computed: true, optional: false, required: false
  public get userPortalGid() {
    return this.getStringAttribute('user_portal_gid');
  }

  // user_portal_name - computed: true, optional: false, required: false
  public get userPortalName() {
    return this.getStringAttribute('user_portal_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ext_domain: cdktf.stringToTerraform(this._extDomain),
      ext_domain_name: cdktf.stringToTerraform(this._extDomainName),
      ext_domain_translation: cdktf.stringToTerraform(this._extDomainTranslation),
      ext_label: cdktf.stringToTerraform(this._extLabel),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ext_domain: {
        value: cdktf.stringToHclTerraform(this._extDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_domain_name: {
        value: cdktf.stringToHclTerraform(this._extDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_domain_translation: {
        value: cdktf.stringToHclTerraform(this._extDomainTranslation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_label: {
        value: cdktf.stringToHclTerraform(this._extLabel),
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
