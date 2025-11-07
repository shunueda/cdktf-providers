// https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/custom_domain_verification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomDomainVerificationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the custom domain resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/custom_domain_verification#custom_domain_id CustomDomainVerificationA#custom_domain_id}
  */
  readonly customDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/custom_domain_verification#id CustomDomainVerificationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/custom_domain_verification#timeouts CustomDomainVerificationA#timeouts}
  */
  readonly timeouts?: CustomDomainVerificationTimeouts;
}
export interface CustomDomainVerificationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/custom_domain_verification#create CustomDomainVerificationA#create}
  */
  readonly create?: string;
}

export function customDomainVerificationTimeoutsToTerraform(struct?: CustomDomainVerificationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function customDomainVerificationTimeoutsToHclTerraform(struct?: CustomDomainVerificationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomDomainVerificationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomDomainVerificationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDomainVerificationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/custom_domain_verification auth0_custom_domain_verification}
*/
export class CustomDomainVerificationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_custom_domain_verification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomDomainVerificationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomDomainVerificationA to import
  * @param importFromId The id of the existing CustomDomainVerificationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/custom_domain_verification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomDomainVerificationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_custom_domain_verification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.33.0/docs/resources/custom_domain_verification auth0_custom_domain_verification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomDomainVerificationAConfig
  */
  public constructor(scope: Construct, id: string, config: CustomDomainVerificationAConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_custom_domain_verification',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.33.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customDomainId = config.customDomainId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cname_api_key - computed: true, optional: false, required: false
  public get cnameApiKey() {
    return this.getStringAttribute('cname_api_key');
  }

  // custom_domain_id - computed: false, optional: false, required: true
  private _customDomainId?: string; 
  public get customDomainId() {
    return this.getStringAttribute('custom_domain_id');
  }
  public set customDomainId(value: string) {
    this._customDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainIdInput() {
    return this._customDomainId;
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

  // origin_domain_name - computed: true, optional: false, required: false
  public get originDomainName() {
    return this.getStringAttribute('origin_domain_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CustomDomainVerificationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CustomDomainVerificationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_domain_id: cdktf.stringToTerraform(this._customDomainId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: customDomainVerificationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_domain_id: {
        value: cdktf.stringToHclTerraform(this._customDomainId),
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
      timeouts: {
        value: customDomainVerificationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomDomainVerificationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
