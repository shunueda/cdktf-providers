// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/externalcontacts_external_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalcontactsExternalSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the external source is active. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/externalcontacts_external_source#active ExternalcontactsExternalSource#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/externalcontacts_external_source#id ExternalcontactsExternalSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the external source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/externalcontacts_external_source#name ExternalcontactsExternalSource#name}
  */
  readonly name: string;
  /**
  * link_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/externalcontacts_external_source#link_configuration ExternalcontactsExternalSource#link_configuration}
  */
  readonly linkConfiguration?: ExternalcontactsExternalSourceLinkConfiguration;
}
export interface ExternalcontactsExternalSourceLinkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/externalcontacts_external_source#uri_template ExternalcontactsExternalSource#uri_template}
  */
  readonly uriTemplate?: string;
}

export function externalcontactsExternalSourceLinkConfigurationToTerraform(struct?: ExternalcontactsExternalSourceLinkConfigurationOutputReference | ExternalcontactsExternalSourceLinkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri_template: cdktf.stringToTerraform(struct!.uriTemplate),
  }
}


export function externalcontactsExternalSourceLinkConfigurationToHclTerraform(struct?: ExternalcontactsExternalSourceLinkConfigurationOutputReference | ExternalcontactsExternalSourceLinkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri_template: {
      value: cdktf.stringToHclTerraform(struct!.uriTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalcontactsExternalSourceLinkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalcontactsExternalSourceLinkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uriTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriTemplate = this._uriTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalcontactsExternalSourceLinkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uriTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uriTemplate = value.uriTemplate;
    }
  }

  // uri_template - computed: false, optional: true, required: false
  private _uriTemplate?: string; 
  public get uriTemplate() {
    return this.getStringAttribute('uri_template');
  }
  public set uriTemplate(value: string) {
    this._uriTemplate = value;
  }
  public resetUriTemplate() {
    this._uriTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriTemplateInput() {
    return this._uriTemplate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/externalcontacts_external_source genesyscloud_externalcontacts_external_source}
*/
export class ExternalcontactsExternalSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_externalcontacts_external_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalcontactsExternalSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalcontactsExternalSource to import
  * @param importFromId The id of the existing ExternalcontactsExternalSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/externalcontacts_external_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalcontactsExternalSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_externalcontacts_external_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/externalcontacts_external_source genesyscloud_externalcontacts_external_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalcontactsExternalSourceConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalcontactsExternalSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_externalcontacts_external_source',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._id = config.id;
    this._name = config.name;
    this._linkConfiguration.internalValue = config.linkConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // link_configuration - computed: false, optional: true, required: false
  private _linkConfiguration = new ExternalcontactsExternalSourceLinkConfigurationOutputReference(this, "link_configuration");
  public get linkConfiguration() {
    return this._linkConfiguration;
  }
  public putLinkConfiguration(value: ExternalcontactsExternalSourceLinkConfiguration) {
    this._linkConfiguration.internalValue = value;
  }
  public resetLinkConfiguration() {
    this._linkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkConfigurationInput() {
    return this._linkConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      link_configuration: externalcontactsExternalSourceLinkConfigurationToTerraform(this._linkConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      link_configuration: {
        value: externalcontactsExternalSourceLinkConfigurationToHclTerraform(this._linkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalcontactsExternalSourceLinkConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
